/**
    CreateTextTable
    Generates formatted ASCII tables from tabular data.

    This function generates formatted ASCII tables from tabular data.

    * @param {Object} data
    * @return {string}
    CreateTextTable(data)

    Arguments:
        data - table - Key-value pairs for table contents

    Returns:
        string - Formatted ASCII table.
*/

commands.Register("table", (playerid, args, argc, silent, prefix) => {
    let tbl = CreateTextTable([
        ["Admin", "Flag", "Group"],
        ["blu", "z", "root"],
        ["skuzzi", "b", "helper"],
        ["m3ntor", "a", "moderator"]
    ]);
    console.log(tbl);
});

/**
    GetCurrentPluginName
    Returns the current plugin name.

    This function returns the current plugin name

    * @return {string}
    GetCurrentPluginName()
*/

commands.Register("pluginname", (playerid, args, argc, silent, prefix) => {
    console.log(GetCurrentPluginName())
});

/**
    GetPluginPath
    Returns the path of a plugin.

    This function returns the path of a plugin.
    
    * @param {string} plugin_name
    * @return {string}
    GetPluginPath(plugin_name)
    
    Arguments:
        plugin_name - string - The name of the plugin that you want the find the path for.
    
    Returns:
        string - The path
*/

commands.Register("getpath", (playerid, args, argc, silent, prefix) => {
    console.log(GetPluginPath("admins"))
});

/**
    GetPluginState
    Returns the state of a plugin.

    This function returns the state of a plugin.

    * @param {string} plugin_name
    * @return {PluginState_t}
    GetPluginState(plugin_name)

    Arguments:
        plugin_name - string - The name of the plugin that you want to check for.

    Returns:
        PluginState_t - Started or Stopped (https://swiftlycs2.net/sdk/coretypes/pluginstate_t)
*/

commands.Register("getpluginstate", (playerid, args, argc, silent, prefix) => {
    console.log(GetPluginState("admins"))
});

/**
    console.log
    Enhanced console output with color formatting support.
    
    Color Usage:
    Embed color codes in strings: "{RED}Alert! {DEFAULT}System normal"
    Available colors: DEFAULT, WHITE, DARKRED, LIGHTPURPLE, GREEN, OLIVE, 
    LIME, RED, LIGHTYELLOW, YELLOW, BLUEGREY, LIGHTBLUE, BLUE, DARKBLUE, 
    PURPLE, MAGENTA, LIGHTRED, GOLD, ORANGE
*/

commands.Register("console.log", (playerid, args, argc, silent, prefix) => {
    console.log("This is an {red}example!")
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
    return "[Javascript] Generic Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}