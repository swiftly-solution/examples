/**
    NextTick
    Schedules a callback to execute on the next server tick/frame.

    This function schedules a callback to execute on the next server tick/frame.

    * @param {() => void} callback
    * @return {null|undefined}
    NextTick(callback)

    Arguments:
        callback - function - The function to execute next frame
*/

commands.Register("nexttick", (playerid, args, argc, silent, prefix) => {
    NextTick(() => {
        console.log("This runs at next server tick!")
    })
});

/**
    SetTimeout
    Executes a callback once after specified delay.

    This function executes a callback once after specified delay.

    * @param {number} delay
    * @param {() => void} callback
    * @return {null|undefined}
    SetTimeout(delay, callback)

    Arguments:
        delay - number - Delay in milliseconds before execution
        callback - function - Function to trigger
*/

commands.Register("settimeout", (playerid, args, argc, silent, prefix) => {
    SetTimeout(3000, function() {
        console.log("3 seconds elapsed!")
    });
});

/**
    SetTimer
    Creates a recurring timer that executes at intervals.

    This function creates a recurring timer that executes at intervals.
    
    * @param {number} delay
    * @param {() => void} callback
    * @return {TimerHandle}
    SetTimer(delay, callback)

    Arguments:
        delay - number - Interval between executions (milliseconds)
        callback - function - Function to trigger
        
    Returns:
        TimerHandle - Unique identifier for the timer.
*/

commands.Register("settimer", (playerid, args, argc, silent, prefix) => {
    SetTimer(1000, function() {
        console.log("This runs every second!")
    });
});

/**
    StopTimer
    Terminates a running timer created with SetTimer.

    This function terminates a running timer created with SetTimer.

    * @param {TimerHandle} timerid
    * @return {null|undefined}
    StopTimer(timerid)
    
    Arguments:
        timerid - TimerHandle - Identifier from SetTimer
*/

commands.Register("startstop", (playerid, args, argc, silent, prefix) => {
    let timer = SetTimer(1000, function() {})
    SetTimeout(5000, function() {
        StopTimer(timer)
    })
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
    return "[Javascript] Timers Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}