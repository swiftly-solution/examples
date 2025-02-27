--[[
    GetPlayerCap
    Returns the maximum player capacity of the server (64).

    --- @return number
    playermanager:GetPlayerCap()

    This function retrieves the maximum number of players that can connect to the server, retrieved from the source engine.
]]

commands:Register("maxplayers", function (playerid, args, argsCount, silent, prefix)
    print("Maximum players: " .. playermanager:GetPlayerCap())
end)

--[[
    GetPlayerCount
    Returns the current number of players online on the server.

    --- @return number
    playermanager:GetPlayerCount()

    This function provides the count of players currently connected to the server.
]]

commands:Register("players", function (playerid, args, argsCount, silent, prefix)
    print("There are: " .. playermanager:GetPlayerCount() .. " players online!")
end)

--[[
    SendMsg
    Sends a formatted message to all online players.

    --- @param msgType MessageType
    --- @param text string
    --- @return nil
    playermanager:SendMsg(msgType, text)

    This function broadcasts a message to every connected player.
    
    Arguments:
        msgType - MessageType - How the message should be sent, there are three ways: 
            1) Notify (MessageType.Notify)
            2) Console (MessageType.Console)
            3) Chat (MessageType.Chat)
            4) Center (MessageType.Center)
        text - string - The text to send to the players.
]]

commands:Register("message", function (playerid, args, argsCount, silent, prefix)
    playermanager:SendMsg(MessageType.Chat, "Hello there!")
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
    return "[Lua] PlayerManager Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end