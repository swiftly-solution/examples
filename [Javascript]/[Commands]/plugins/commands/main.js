/*
    The commands are automatically registered in the console using the `sw_` prefix.
    These commands can be called by both the server and the client.

    Arguments:
        commandName - string - The command name.
        callback - function(playerId, args, argc, silent, prefix)
            - playerId - number - Player ID (-1 = Console, 0-63 = Player IDs)
            - args - array - A list of all the arguments provided to the command
            - argc - number - The number of arguments provided to the command
            - silent - boolean - If the command has been executed silently by the player
            - prefix - string - The prefix used for the command

    For example, the commands can be called with the following methods:
        VIA Console: sw_testcmd arg1 arg2 ... (playerId = -1, args = [arg1, arg2, ...], argc = number of arguments, silent = true, prefix = "sw_")
        VIA Chat (Silent Prefix): /testcmd arg1 arg2 ... (playerId = player ID, args = [arg1, arg2, ...], argc = number of arguments, silent = true, prefix = "/")
        VIA Chat (Normal Prefix): !testcmd arg1 arg2 ... (playerId = player ID, args = [arg1, arg2, ...], argc = number of arguments, silent = false, prefix = "!")
*/
commands.Register("testcmd", (playerId, args, argc, silent, prefix) => {
    console.log("Hello World!");
});

/*
    We can also register aliases for the commands by calling the following function, which takes the command name and the new alias name.
    It will automatically register the alias command with the `sw_` prefix.

    Arguments:
        command - string - The command name.
        alias - string - The raw alias name.

    For example:
        `sw_consolecmd` will be registered as an alias of `sw_testcmd`, and the function callback for `sw_testcmd` will be called if you use `sw_consolecmd`.
*/
commands.RegisterAlias("testcmd", "consolecmd");

/*
    Furthermore, we can also register aliases without the `sw_` prefix using the following function.
    It will automatically register the alias command without the `sw_` prefix.

    Arguments:
        command - string - The command name.
        alias - string - The raw alias name.

    For example:
        `rawtestcmd` will be registered as an alias of `sw_testcmd`, and the function callback for `sw_testcmd` will be called if you use `rawtestcmd`.
*/
commands.RegisterRawAlias("testcmd", "rawtestcmd");

/*
    You can also unregister aliases if you don't want them to be used anymore.

    Arguments:
        alias - string - The alias name.
*/
commands.UnregisterAlias("consolecmd");

/*
    Additionally, we can also unregister commands if you don't want them to be used anymore.

    Arguments:
        commandName - string - The command name.
*/
commands.Unregister("testcmd");

/*
    Replying to a command

    There are two ways to reply to a command:
        1. Using the ReplyToCommand function, which takes the playerId, prefix, and text message and sends it to the player.
        2. Using console.log (Console Send Message) or SendMsg (Player Send Message).
*/

/*
    Replying to a command

    1. Replying to a command via ReplyToCommand.

    ReplyToCommand Arguments:
        playerId - number - Player ID (-1 = Console, 0-63 = Player IDs)
        prefix - string - The prefix that will appear in the chat (If the playerId is the console, the prefix will not appear)
        text - string - The text to send to the player or the console.
*/
commands.Register("replycmd", (playerId, args, argc, silent, prefix) => {
    ReplyToCommand(playerId, "[PREFIX]", "Test Message");
});

/*
    Replying to a command

    2. Replying to a command via console.log (Console Send Message) or SendMsg (Player Send Message).

    console.log Arguments:
        text - string - The text to send to the console.

    SendMsg Arguments:
        messageType - MessageType - How the message should be sent to the player.
        text - string - The text to send to the player.
*/
commands.Register("replycmd", (playerId, args, argc, silent, prefix) => {
    const player = GetPlayer(playerId);
    // If the player is null, it is the console; otherwise, it is the player.
    if (!player) {
        // Console
        console.log("Text Message"); // The message "Text Message" will appear in the server's console.
    } else {
        // Player
        player.SendMsg(MessageType.Chat, "Text Message"); // The message "Text Message" will appear in the player's chat.
    }
});

/*
    Core Functions
*/
function getPluginAuthor() {
    return "Swiftly Solution";
}

function getPluginVersion() {
    return "1.0.0";
}

function getPluginName() {
    return "[Javascript] Commands Examples";
}

function getPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}