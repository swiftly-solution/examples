/**
    Call Export
    Calls the specified export.

    This function calls the specified export.
    
    * @param {any} ...
    * @return {any}
    exports["PLUGIN_NAME"].EXPORT_NAME(...)
*/

commands.Register("testexport", (playerid, args, argc, silent, prefix) => {
    let player = GetPlayer(playerid);
    if (!player || !player.IsValid()) return;

    if (!exports["admins"].HasFlags(playerid, "b")) {
        return player.SendMsg(MessageType.Chat, "You don't have the right flag for this command!");
    }
});

/**
    Register Export
    Registers an export for this plugin.

    This function registers an export for this plugin.
    
    * @param {string} exportName
    * @param {(...args: any[]) => void} callback
    * @return {null|undefined}
    export(exportName, callback)
*/

exp("GetCredits", (playerid) => {
    let player = GetPlayer(playerid);
    if (!player) return 0;
    if (player.IsFakeClient()) return 0;

    return player.GetVar("credits");
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
    return "[Javascript] Exports Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}