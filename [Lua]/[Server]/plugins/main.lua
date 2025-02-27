--[[
    ChangeMap
    Changes the current map to the specified one.

    This function triggers a map change. The `workshop` parameter determines if the map is loaded from the Steam Workshop.
    
    --- @param map string
    --- @param workshop boolean
    --- @return nil
    server:ChangeMap(map, workshop)
    
    Arguments:
        map - string - The name of the map to load (e.g., "de_dust2").
        workshop - boolean - Whether the map is a Steam Workshop map (true) or a default map (false).
]]

commands:Register("changemap", function (playerid, args, argsCount, silent, prefix)
    server:ChangeMap("de_dust2", false) -- Example for not-workshop map.
    server:ChangeMap("random_workshop_map", true) -- Example for workshop map
end)

--[[
    Execute
    Executes a command into the server's console.

    This function runs commands directly in the server console.

    --- @param command string
    --- @return nil
    server:Execute(command)

    Arguments:
        command - string - The command to execute.
]]

commands:Register("command", function (playerid, args, argsCount, silent, prefix)
    server:Execute("sv_cheats 1")
end)

--[[
    GetCurrentTime
    Returns the server's current time.

    This function returns the server's time.

    --- @return number
    server:GetCurrentTime()
]]

commands:Register("time", function (playerid, args, argsCount, silent, prefix)
    print("Current time: " .. server:GetCurrentTime())
end)

--[[
    GetIP
    Retrieves the server's public IP address.

    This function returns the server's public IP address.

    --- @return string
    server:GetIP()
]]

commands:Register("ip", function (playerid, args, argsCount, silent, prefix)
    print("Server IP: " .. server:GetIP())
end)

--[[
    GetMap
    Returns the name of the current map.

    This function returns the name of the current map.
    
    --- @return string
    server:GetMap()
]]

commands:Register("currentmap", function (playerid, args, argsCount, silent, prefix)
    print("Current map is: " .. server:GetMap())
end)

--[[
    GetMaxPlayers
    Returns the maximum players allowed on the server (slots).

    This function returns the maximum players allowed on the server (slots)

    --- @return number
    server:GetMaxPlayers()
]]

commands:Register("maxplayers", function (playerid, args, argsCount, silent, prefix)
    print("Max players: " .. server:GetMaxPlayers())
end)

--[[
    GetTickCount
    Returns the server's current tick count.

    This function returns the server's current tick count.
    
    --- @return number
    server:GetTickCount()
]]

commands:Register("tickcount", function (playerid, args, argsCount, silent, prefix)
    print("Tick count: " .. server:GetTickCount())
end)

--[[
    IsMapValid
    Checks if a map is valid/available on the server.

    --- @param map string
    --- @return boolean
    server:IsMapValid(map)

    Arguments:
        map - string - The map name to check.
]]

commands:Register("isvalid", function (playerid, args, argsCount, silent, prefix)
    if server:IsMapValid("de_nuke") then
        print("The map de_nuke is valid!")
    else
        print("The map de_nuke is not valid!")
    end
end)

--[[
    TerminateRound
    Ends the current round with a delay and specified reason.

    --- @param delay number
    --- @param reason RoundEndReason_t
    --- @return nil
    server:TerminateRound(delay, reason)

    Arguments:
        delay - number - Time in milliseconds before the round ends.
        reason - RoundEndReason_t - Round end reason, all of the reasons can be found here: https://swiftlycs2.net/sdk/coretypes/roundendreason_t
]]

commands:Register("endround", function (playerid, args, argsCount, silent, prefix)
    server:TerminateRound(5000, RoundEndReason_t.TerroristsPlanted)
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
    return "[Lua] Server Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end