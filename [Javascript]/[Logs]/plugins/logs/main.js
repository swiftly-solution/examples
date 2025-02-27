/**
    Write
    Writes a specific text in the plugin's log file.

    This function writes a specific text in the plugin's log file.

    * @param {LogType_t} log_type
    * @param {string} text
    * @return {null|undefined}
    logger.Write(log_type, text)

    Arguments:
        log_type - LogType_t - The log type, which can be: Debug, Warning, Error or Common, you can find them here: https://swiftlycs2.net/sdk/coretypes/logtype_t
        text - string - The text to log.
*/

AddEventHandler("OnPlayerConnectFull", function(event) {
    let playerid = event.GetInt("userid")
    let player = GetPlayer(playerid)
    if (!player || !player.IsValid()) return;

    if (!player.CBasePlayerController().IsValid()) return;
    logger.Write(LogType_t.Common, `The player: ${player.CBasePlayerController().PlayerName} joined the server!`)
})

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
    return "[Javascript] Logs Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}