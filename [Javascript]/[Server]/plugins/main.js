/**
    ChangeMap
    Changes the current map to the specified one.

    This function triggers a map change. The `workshop` parameter determines if the map is loaded from the Steam Workshop.
    
    * @param {string} map
    * @param {boolean} workshop
    * @return {null|undefined}
    server.ChangeMap(map, workshop)
    
    Arguments:
        map - string - The name of the map to load (e.g., "de_dust2").
        workshop - boolean - Whether the map is a Steam Workshop map (true) or a default map (false).
*/

commands.Register("changemap", (playerId, args, argc, silent, prefix) => {
    server.ChangeMap("de_dust2", false); // Example for not-workshop map.
    server.ChangeMap("random_workshop_map", true); // Example for workshop map
});

/**
    Execute
    Executes a command into the server's console.

    This function runs commands directly in the server console.

    * @param {string} command
    * @return {null|undefined}
    server.Execute(command)

    Arguments:
        command - string - The command to execute.
*/

commands.Register("command", (playerId, args, argc, silent, prefix) => {
    server.Execute("sv_cheats 1");
});

/**
    GetCurrentTime
    Returns the server's current time.

    This function returns the server's time.

    * @return {number}
    server.GetCurrentTime()
*/

commands.Register("time", (playerId, args, argc, silent, prefix) => {
    console.log(`Current time: {time}`, server.GetCurrentTime());
});

/**
    GetIP
    Retrieves the server's public IP address.

    This function returns the server's public IP address.

    * @return {string}
    server.GetIP()
*/

commands.Register("ip", (playerId, args, argc, silent, prefix) => {
    console.log(`Server IP: {ip}`, server.GetIP());
});

/**
    GetMap
    Returns the name of the current map.

    This function returns the name of the current map.
    
    * @return {string}
    server.GetMap()
*/

commands.Register("currentmap", (playerId, args, argc, silent, prefix) => {
    console.log(`Current map is: {currentmap}`, server.GetMap());
});

/**
    GetMaxPlayers
    Returns the maximum players allowed on the server (slots).

    This function returns the maximum players allowed on the server (slots)

    * @return {number}
    server.GetMaxPlayers()
*/

commands.Register("maxplayers", (playerId, args, argc, silent, prefix) => {
    console.log(`Max players: {players}`, server.GetMaxPlayers());
});

/**
    GetTickCount
    Returns the server's current tick count.

    This function returns the server's current tick count.
    
    * @return {number}
    server.GetTickCount()
*/

commands.Register("tickcount", (playerId, args, argc, silent, prefix) => {
    console.log(`Tick count: {tick}`, server.GetTickCount());
});

/**
    IsMapValid
    Checks if a map is valid/available on the server.

    * @param {string} map
    * @return {boolean}
    server.IsMapValid(map)

    Arguments:
        map - string - The map name to check.
*/

commands.Register("isvalid", (playerId, args, argc, silent, prefix) => {
    if(server.IsMapValid("de_nuke")){
        console.log("The map: de_nuke is valid");
    } else {
        console.log("The map: de_nuke is not valid. ");
    }
});

/**
    TerminateRound
    Ends the current round with a delay and specified reason.

    * @param delay number
    * @param reason RoundEndReason_t
    * @return nil
    server.TerminateRound(delay, reason)

    Arguments:
        delay - number - Time in milliseconds before the round ends.
        reason - RoundEndReason_t - Round end reason, all of the reasons can be found here. https.//swiftlycs2.net/sdk/coretypes/roundendreason_t
*/

commands.Register("endround", (playerId, args, argc, silent, prefix) => {
    server.TerminateRound(5000, RoundEndReason_t.TerroristsPlanted);
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
    return "[Javascript] Server Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}