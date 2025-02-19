--[[
    The commands are automatically registered in console using the `sw_` prefix.
    Those commands can be called by both the server and the client.

    Arguments:
        command_name - string - The command name.
        callback - function(playerid, args, argc, silent, prefix)
            - playerid - number - PLayer ID (-1 = Console, 0-63 = PlayerID's)
            - args - table/list - A list of all the arguments provided to the command
            - argc - number - The number of arguments provided to the command
            - silent - boolean - If the command has been executed silently by the player
            - prefix - string - The prefix which was used for the command

    For example, the commands can be called with the following methods:
        VIA Console: sw_testcmd arg1 arg2 ... (playerid = -1, args = {arg1, arg2, ...}, argc = number of arguments, silent = true, prefix = "sw_")
        VIA Chat (Silent Prefix): /testcmd arg1 arg2 ... (playerid = player id, args = {arg1, arg2, ...}, argc = number of arguments, silent = true, prefix = "/")
        VIA Chat (Normal Prefix): !testcmd arg1 arg2 ... (playerid = player id, args = {arg1, arg2, ...}, argc = number of arguments, silent = false, prefix = "!")
]]
commands:Register("testcmd", function (playerid, args, argc, silent, prefix)
    print("Hello World!")
end)

--[[
    We can also register aliases for the commands by calling the following fucntion, which is containing the command name and the new alias name.
    It will automatically register the alias command with the `sw_` prefix.

    Arguments:
        command - string - The command name.
        alias - string - The raw alias name.

    For example: 
        `sw_consolecmd` will be registered as an alias of `sw_testcmd` and the function callback for `sw_testcmd` will be called if you use `sw_consolecmd`.
]]
commands:RegisterAlias("testcmd", "consolecmd")

--[[
    Furthermore, we can also register aliases without the `sw_` prefix with the following function.
    It will automatically register the alias command without the `sw_` prefix.

    Arguments:
        command - string - The command name.
        alias - string - The raw alias name.

    For example: 
        `rawtestcmd` will be registered as an alias of `sw_testcmd` and the function callback for `sw_testcmd` will be called if you use `rawtestcmd`.
]]
commands:RegisterRawAlias("testcmd", "rawtestcmd")

--[[
    You can also unregister aliases if you don't want them to be used anymore.

    Arguments:
        alias - string - The alias name.
]]
commands:UnregisterAlias("consolecmd")

--[[
    Adding to that, we can also unregister commands if you don't want them to be used anymore.

    Arguments:
        commandName - string - The alias name.
]]
commands:Unregister("testcmd")

--[[
    Replying to a command

    To reply to a command we have 2 ways:
        1. We can use the function ReplyToCommand which is taking the playerid, prefix and the text message and sends to the player.
        2. We can use the print (Console Send Message) and SendMsg (Player Send Message) functions.
]]

--[[
    Replying to a command

    1. Replying to a command via ReplyToCommand.

    ReplyToCommand Arguments:
        playerid - number - PLayer ID (-1 = Console, 0-63 = PlayerID's)
        prefix - string - The prefix which will appear in the chat (If the playerid is the console, the prefix will not appear)
        text - string - The text to send to the player or the console.
]]
commands:Register("replycmd", function (playerid, args, argc, silent, prefix)
    ReplyToCommand(playerid, "[PREFIX]", "Test Message")
end)

--[[
    Replying to a command

    2. Replying to a command via print (Console Send Message) or SendMsg (Player Send Message).

    print Arguments:
        text - string - The text to send to the console.

    SendMsg Arguments:
        messageType - MessageType - How the message should be sent to the player.
        text - string - The text to send to the player.
]]
commands:Register("replycmd", function (playerid, args, argc, silent, prefix)
    local player = GetPlayer(playerid)
    -- If the player is nil, it is the console, otherwise it is the player.
    if not player then
        -- Console
        print("Text Message") -- The message "Text Message" will appear in the server's console.
    else
        -- Player
        player:SendMsg(MessageType.Chat, "Text Message") -- The message "Text Message" will appear in the player's chat.
    end
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
    return "[Lua] Commands Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end