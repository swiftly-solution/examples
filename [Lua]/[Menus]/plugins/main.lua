--[[
    Register
    Creates a persistent menu with specified configuration.

    This function creates a persistent menu with specified configuration.

    --- @param id string
    --- @param title string
    --- @param color string
    --- @param options table
    --- @param kind string|nil
    --- @return nil
    menus:Register(id, title, color, options, kind)
    
    Arguments:
        id - string - Unique identifier for the menu
        title - string - Displayed menu header text
        color - string - Background color in RRGGBB hex format (e.g., "344CEB" for blue)
        options - table - List of {display_text, action_value} pairs
        kind - string|nil - [Optional] Menu type identifier (defaults to screen menu), kinds are available here: https://swiftlycs2.net/plugin-docs/configuration/menu#kinds
        
    Options Requirements:
        - Must contain string pairs in format:
        {
            {"Display Text 1", "action1"}, 
            {"Display Text 2", "menu_submenu"}
        }
        - Actions can be:
            * Swiftly command with arguments (e.g., "sw_kick @1")
            * Submenu ID to cascade menus
            * Empty string for no-action items
]]

commands:Register("menu", function (playerid, args, argsCount, silent, prefix)
    menus:Register("menu", "Admin Panel", "344CEB", {
        {"Kick Player", "sw_kick #1"},
        {"Mute Player", "sw_mute #1"},
        {"Ban Player", "sw_ban #1"}
    }, "screen") -- screen or center
end)

--[[
    RegisterTemporary
    Creates a short-lived menu that auto-removes after use.

    This function creates a short-lived menu that auto-removes after use.

    --- @param id string
    --- @param title string
    --- @param color string
    --- @param options table
    --- @param kind string|nil
    --- @return nil
    menus:RegisterTemporary(id, title, color, options, kind)
    
    Arguments:
        id - string - Unique identifier for the menu
        title - string - Displayed menu header text
        color - string - Background color in RRGGBB hex format (e.g., "344CEB" for blue)
        options - table - List of {display_text, action_value} pairs
        kind - string|nil - [Optional] Menu type identifier (defaults to screen menu), kinds are available here: https://swiftlycs2.net/plugin-docs/configuration/menu#kinds
        
    Options Requirements:
        - Must contain string pairs in format:
        {
            {"Display Text 1", "action1"}, 
            {"Display Text 2", "menu_submenu"}
        }
        - Actions can be:
            * Swiftly command with arguments (e.g., "sw_kick @1")
            * Submenu ID to cascade menus
            * Empty string for no-action items
            
        - Note: The menu will auto-destruct after using it.
]]

commands:Register("tempmenu", function (playerid, args, argsCount, silent, prefix)
    menus:RegisterTemporary(string.format("temp_menu_%d", playerid), "Admin Panel", "344CEB", {
        {"Kick Player", "sw_kick #1"},
        {"Mute Player", "sw_mute #1"},
        {"Ban Player", "sw_ban #1"}
    }, "screen") -- screen or center
end)

--[[
    UnregisterMenu
    Unregisters a menu.

    This function unregisters a menu.
    
    --- @param id string
    --- @return nil
    menus:Unregister(id)

    Arguments:
        id - string - The identifier of the menu to remove
]]

commands:Register("removemenu", function (playerid, args, argsCount, silent, prefix)
    menus:Unregister("admin_menu")
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
    return "[Lua] Menus Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end