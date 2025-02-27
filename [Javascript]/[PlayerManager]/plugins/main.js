/**
    GetPlayerCap
    Returns the maximum player capacity of the server (64).

    * @return {number}
    playermanager.GetPlayerCap()

    This function retrieves the maximum number of players that can connect to the server, retrieved from the source engine.
*/

commands.Register("maxplayers", (playerId, args, argc, silent, prefix) => {
    console.log(`Maximum players: {players}`, playermanager.GetPlayerCap());
});

/**
    GetPlayerCount
    Returns the current number of players online on the server.

    * @return {number}
    playermanager.GetPlayerCount()

    This function provides the count of players currently connected to the server.
*/

commands.Register("players", (playerId, args, argc, silent, prefix) => {
    console.log(`There are: {players} online!`, playermanager.GetPlayerCount());
});

/**
    SendMsg
    Sends a formatted message to all online players.

    * @param {MessageType} msgType
    * @param {string} text
    * @return {null|undefined}
    playermanager.SendMsg(msgType, text)

    This function broadcasts a message to every connected player.

    Arguments:
        msgType - MessageType - How the message should be sent, there are three ways: 
            1) Notify (MessageType.Notify)
            2) Console (MessageType.Console)
            3) Chat (MessageType.Chat)
            4) Center (MessageType.Center)
        text - string - The text to send to the players.
*/

commands.Register("players", (playerId, args, argc, silent, prefix) => {
    playermanager.SendMsg(MessageType.Chat, "Hello there!")
});

/*
    Core Functions
*/
function GetPluginAuthor() {
    return "Swiftly Solution";
}

function GetPluginVersion() {
    return "1.0.0";
}

function GetPluginName() {
    return "[Javascript] PlayerManager Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}