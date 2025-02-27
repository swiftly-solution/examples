/**
    GetBunnyhop
    Retrieves the bunnyhop automation status for a player.

    This function retrieves the bunnyhop automation status for a player.

    * @param {number} playerid
    * @return {boolean}
    playerutils.GetBunnyhop(playerid)

    Arguments:
        playerid - number - The PlayerID of the player that you want to check for.

    Returns:
        boolean - true if bhop is enabled, false if disabled.

    !!! In order to use this function, you need to have the Player Utils Extension instaled on your server: https://github.com/swiftly-solution/utils-extension
*/

commands.Register("checkbunnyhop", (playerid, args, argc, silent, prefix) => {
    console.log(playerutils.GetBunnyhop(playerid))
});

/**
    IsListeningToGameEvent
    Checks if a player is actively listening to a specific game event (used for catching cheaters).

    This function checks if a player is actively listening to a specific game event.
    
    * @param {number} playerid
    * @param {string} event_name
    * @return {boolean}
    playerutils.IsListeningToGameEvent(playerid, event_name)    

    Arguments:
        playerid - number - The PlayerID of the player that you want to check for.
        event_name - string - The event name that you want to check (e.g "player_death", "player_hurt")
        
    Returns:
        boolean - true if player is listening for the event, false otherwise

    !!! In order to use this function, you need to have the Player Utils Extension instaled on your server: https://github.com/swiftly-solution/utils-extension
*/

commands.Register("checkevent", (playerid, args, argc, silent, prefix) => {
    console.log(playerutils.IsListeningToGameEvent(playerid, "player_death"))
});

/**
    SetBunnyhop
    Enables/disables automatic bunnyhopping for a player.

    This function enables/disables automatic bunnyhopping for a player.

    * @param {number} playerid
    * @param {boolean} state
    * @return {null|undefined}
    playerutils.SetBunnyhop(playerid, state)

    Arguments:
        playerid - number - The PlayerID of the player that you want to check for.
        state - boolean - true to enable bhop, false to disable
    
    !!! In order to use this function, you need to have the Player Utils Extension instaled on your server: https://github.com/swiftly-solution/utils-extension
*/

commands.Register("activatebhop", (playerid, args, argc, silent, prefix) => {
    playerutils.SetBunnyhop(playerid, true)
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
    return "[Javascript] Player Utils Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}