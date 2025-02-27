/**
    RegisterTemporary
    Creates a persistent menu with specified configuration.

    This function creates a persistent menu with specified configuration.

    * @param {string} id
    * @param {string} title
    * @param {string} color
    * @param {Object} options
    * @param {string|null} kind
    * @return {null|undefined}
    menus.RegisterTemporary(id, title, color, options, kind)
    
    Arguments:
        id - string - Unique identifier for the menu
        title - string - Displayed menu header text
        color - string - Background color in RRGGBB hex format (e.g., "344CEB" for blue)
        options - object - Pair of strings
        kind - string|nil - [Optional] Menu type identifier (defaults to screen menu), kinds are available here: https://swiftlycs2.net/plugin-docs/configuration/menu#kinds
        
    Options Requirements:
        - Must contain string pairs in format:
        [
            [ "Display Text 1", "action1" ]
            [ "Display Text 2", "menu_submenu" ]
        ]
        - Actions can be:
            * Swiftly command with arguments (e.g., "sw_kick @1")
            * Submenu ID to cascade menus
            * Empty string for no-action items
            
*/

commands.Register("menu", (playerId, args, argc, silent, prefix) => {
    menus.Register(`admin_menu`, "Admin Panel", "344CEB", 
        [
            ["Kick Player", "sw_kick #1"],
            ["Mute Player", "sw_mute #1"],
            ["Ban Player", "sw_ban #1"]
        ], 
        "screen" // or "center"
    );
});

/**
    RegisterTemporary
    Creates a short-lived menu that auto-removes after use.

    This function creates a short-lived menu that auto-removes after use.

    * @param {string} id
    * @param {string} title
    * @param {string} color
    * @param {Object} options
    * @param {string|null} kind
    * @return {null|undefined}
    menus.RegisterTemporary(id, title, color, options, kind)
    
    Arguments:
        id - string - Unique identifier for the menu
        title - string - Displayed menu header text
        color - string - Background color in RRGGBB hex format (e.g., "344CEB" for blue)
        options - object - Pair of strings
        kind - string|nil - [Optional] Menu type identifier (defaults to screen menu), kinds are available here: https://swiftlycs2.net/plugin-docs/configuration/menu#kinds
        
    Options Requirements:
        - Must contain string pairs in format:
        [
            [ "Display Text 1", "action1" ]
            [ "Display Text 2", "menu_submenu" ]
        ]
        - Actions can be:
            * Swiftly command with arguments (e.g., "sw_kick @1")
            * Submenu ID to cascade menus
            * Empty string for no-action items
            
        - Note: The menu will auto-destruct after using it.
*/

commands.Register("tempmenu", (playerId, args, argc, silent, prefix) => {
    menus.RegisterTemporary(`temp_menu_${playerId}`, playerId, "Admin Panel", "344CEB", 
        [
            ["Kick Player", "sw_kick #1"],
            ["Mute Player", "sw_mute #1"],
            ["Ban Player", "sw_ban #1"]
        ], 
        "screen" // or "center"
    );
});


/**
    UnregisterMenu
    Unregisters a menu.

    This function unregisters a menu.
    
    * @param {string} id
    * @return {null|undefined}
    menus.Unregister(id)

    Arguments:
        id - string - The identifier of the menu to remove
*/

commands.Register("removemenu", (playerId, args, argc, silent, prefix) => {
    menus.Unregister("admin_menu")
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
    return "[Javascript] Menus Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}