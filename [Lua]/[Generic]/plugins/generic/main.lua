--[[
    CreateTextTable
    Generates formatted ASCII tables from tabular data.

    This function generates formatted ASCII tables from tabular data.

    --- @param data table
    --- @return string
    CreateTextTable(data)

    Arguments:
        data - table - Key-value pairs for table contents

    Returns:
        string - Formatted ASCII table.
]]

commands:Register("table", function (playerid, args, argsCount, silent, prefix)
    local tbl = CreateTextTable({
        {"Admin", "Flag", "Group"},
        {"blu", "z", "root"},
        {"skuzzi", "b", "helper"},
        {"m3ntor", "a", "moderator"}
    })
    print(tbl)
end)

--[[
    GetCurrentPluginName
    Returns the current plugin name.

    This function returns the current plugin name

    --- @return string
    GetCurrentPluginName()
]]

commands:Register("pluginname", function (playerid, args, argsCount, silent, prefix)
    print(GetCurrentPluginName())
end)

--[[
    GetPluginPath
    Returns the path of a plugin.

    This function returns the path of a plugin.
    
    --- @param plugin_name string
    --- @return string
    GetPluginPath(plugin_name)
    
    Arguments:
        plugin_name - string - The name of the plugin that you want the find the path for.
    
    Returns:
        string - The path
]]

commands:Register("getpath", function (playerid, args, argsCount, silent, prefix)
    print(GetPluginPath("admins"))
end)

--[[
    GetPluginState
    Returns the state of a plugin.

    This function returns the state of a plugin.

    --- @param plugin_name string
    --- @return PluginState_t
    GetPluginState(plugin_name)

    Arguments:
        plugin_name - string - The name of the plugin that you want to check for.

    Returns:
        PluginState_t - Started or Stopped (https://swiftlycs2.net/sdk/coretypes/pluginstate_t)
]]

commands:Register("getpluginstate", function (playerid, args, argsCount, silent, prefix)
    print(GetPluginState("admins"))
end)

--[[
    Print
    Enhanced console output with color formatting support.
    
    Color Usage:
    Embed color codes in strings: "{RED}Alert! {DEFAULT}System normal"
    Available colors: DEFAULT, WHITE, DARKRED, LIGHTPURPLE, GREEN, OLIVE, 
    LIME, RED, LIGHTYELLOW, YELLOW, BLUEGREY, LIGHTBLUE, BLUE, DARKBLUE, 
    PURPLE, MAGENTA, LIGHTRED, GOLD, ORANGE
]]

commands:Register("print", function (playerid, args, argsCount, silent, prefix)
    print("This is an {red}example!")
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
    return "[Lua] Generic Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end