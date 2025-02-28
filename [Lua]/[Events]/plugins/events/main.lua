--[[
    Types of Game Events
    There are three types of game events you can work with in Swiftly:

        • Core Events: These are custom events implemented by the Swiftly development team, providing enhanced functionality specific to the platform.
        • Default Game Events: These are native events provided by Counter-Strike 2 (CS2).
        • Custom  Events: These are events you can create yourself to trigger specific actions in your plugin.

    The Core Events were implemented by us, and the rest of the Game Events are just default events provided by CS2.
]]

--[[
    AddEventHandler
    Adds a new event handler for the specified event

    This function creates a hook for specified event (game, core or custom events).

    --- @param eventName string
    --- @param callback fun(event:Event,...):EventResult|nil
    --- @return EventHandler
    AddEventHandler(eventName, callback)
    
    Arguments:
        eventName - string - The event name.
        callback - function - The function to call when the event is triggered.
        
    For Core Events/ Custom Events, the callback may include additional parameters like playerid, text, etc. For Default Game Events, the callback receives a single parameter: event.
    
    Cancelling events
        For every game event, we return an EventResult. This determines how the event should proceed within the game. Let’s break down the possible EventResult values:

        EventResult = {
            Continue: 0, // Continues to process the event until the end.
            Stop: 1,     // Stops processing the event and stops calling the code following by it.
            Handled: 2   // Stops processing the event but calls the code followed by it.
        }    
]]

--[[ CoreEvent ]]
AddEventHandler("OnPluginStart", function (event)
    print("Plugin Started")
end)

--[[ Cancelling events ]]
AddEventHandler("OnPlayerDeath", function (event)
    return EventResult.Stop -- Prevent the event from propagating further.
end)

--[[
    GameEvent
    Each default game event contains specific keys that you can read and modify to suit your needs. Let’s walk through an example:
]]

AddEventHandler("OnPlayerDeath", function(event)
    local playerid = event:GetInt("userid") -- Retrieve the ID of the player who died.
    local attackerid = event:GetInt("attacker") -- Retrieve the ID of the player who attacked.
    local headshot = event:GetBool("headshot") -- Check if the kill was a headshot.
    local noscope = event:GetBool("noscope") -- Check if the kill was performed without a scope.
    return EventResult.Continue
end)
--[[
    Changing event keys.
    Now that we know how to read keys from game events, let’s explore how to modify them. To do this, use the Set functions along with the appropriate data type, such as SetInt or SetBool
]]

AddEventHandler("OnPlayerDeath", function(event)
    event:SetBool("headshot", true) -- Force the event to register as a headshot.
    event:SetBool("wipe", 1) -- Force the event to register as a wipe.
    event:SetBool("noscope", true) -- Force the event to register as a noscope.
end)

--[[
    RemoveEventHandler
    Remove a added event handler.

    --- @param eventHandler EventHandler
    --- @return nil
    RemoveEventHandler(eventHandler)

    Arguments:
        eventHandler - EventHandler - The event handler to remove.

]]

local event = AddEventHandler("OnPlayerConnectFull", function (event)
    local player = GetPlayer(event:GetInt("userid"))
    if not player then return end
    print("Player " .. tostring(player:GetSteamID()) .. " connected.")
    return EventResult.Continue
end)

commands:Register("removeevent", function (playerid, args, argc, silent, prefix)
    RemoveEventHandler(event) -- Removes the event handler. Definied OnPlayerConnectFull event will be removed.
end)

--[[
    TriggerEvent
    Triggers an event with the specified name and arguments. This will call all the core / game and custom event.

    --- @param eventName string
    --- @param ... any
    --- @return EventResult, Event
    TriggerEvent(eventName, ...)
]]

--[[ CustomEvent ]]
commands:Register("triggercustomevent", function (playerid, args, argc, silent, prefix)
    TriggerEvent("example:CustomEvent", playerid, "Test Argument") -- Triggers the custom event with the argument string "Test Argument".
end)

AddEventHandler("example:CustomEvent", function (event, playerid, argument)
    print("Player " .. tostring(playerid) .. " triggered the custom event with the argument: " .. argument)
    return EventResult.Continue
end)

--[[
    Core Functions
]]
function GetPluginAuthor()
    return "Swiftly Solution"
end

function GetPluginVersion()
    return "1.0.0"
end

function GetPluginName()
    return "[Lua] Events Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end