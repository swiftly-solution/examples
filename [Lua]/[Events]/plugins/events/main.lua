--[[
    AddEventHandler
    Adds a new event handler for the specified event

    This function creates a hook menu for specified event (game, core or custom events).

    --- @param eventName string
    --- @param callback fun(event:Event,...):EventResult|nil
    --- @return EventHandler
    AddEventHandler(eventName, callback)
    
    Arguments:
        eventName - string - The event name.
        callback - function - The function to call when the event is triggered.  
]]

--[[ CoreEvent ]]
AddEventHandler("OnPluginStart", function (event)
    print("Plugin Started")
end)

--[[ GameEvent ]]
AddEventHandler("OnPlayerConnectFull", function (event)
    local player = GetPlayer(event:GetInt("userid"))
    if not player then return end
    print("Player " .. tostring(player:GetSteamID()) .. " connected.")
    return EventResult.Continue
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