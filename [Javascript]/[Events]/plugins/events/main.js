/**
    AddEventHandler
    Adds a new event handler for the specified event

    This function creates a hook menu for specified event (game, core or custom events).

    * @param {string} eventName
    * @param {(event:Event,...args: any[]) => EventResult|null} callback
    * @return {EventHandler}
    AddEventHandler(eventName, callback)
    
    Arguments:
        eventName - string - The event name.
        callback - function - The function to call when the event is triggered.  
*/

/* CoreEvent */
AddEventHandler("OnPluginStart", function (event){
    console.log("Plugin Started");
});
    


/* GameEvent */
AddEventHandler("OnPlayerConnectFull", function (event) {
    let player = GetPlayer(event.GetInt("userid"));
    if (!player) return;
    console.log(`Player ${player.GetSteamID()} connected.`);
    return EventResult.Continue;
});

/**
    RemoveEventHandler
    Remove a added event handler.

    * @param {EventHandler} eventHandler
    * @return {null|undefined}
    RemoveEventHandler(eventHandler)

    Arguments:
        eventHandler - EventHandler - The event handler to remove.

*/

let event = AddEventHandler("OnPlayerConnectFull", function (event) {
    let player = GetPlayer(event.GetInt("userid"));
    if (!player) return;
    console.log(`Player ${player.GetSteamID()} connected.`);
    return EventResult.Continue;
});

commands.Register("removeevent", function (playerid, args, argc, silent, prefix) {
    RemoveEventHandler(event); // Removes the event handler. Definied OnPlayerConnectFull event will be removed.
});


/**
    TriggerEvent
    Triggers an event with the specified name and arguments. This will call all the core / game and custom event.

    * @param {string} eventName
    * @param {any} ...
    * @return {[EventResult, Event]}
    TriggerEvent(eventName, ...)
*/

/* CustomEvent */
commands.Register("triggercustomevent", function (playerid, args, argc, silent, prefix) {
    TriggerEvent("example:CustomEvent", playerid, "Test Argument"); // Triggers the custom event with the arguments playerid as number  and string "Test Argument".
});

AddEventHandler("example:CustomEvent", function (event, playerid, arg) {
    console.log(`Player ${playerid} triggered the custom event with the argument: ${arg}`);
    return EventResult.Continue;
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
    return "[Javascript] Events Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}