--[[
    NextTick
    Schedules a callback to execute on the next server tick/frame.

    This function schedules a callback to execute on the next server tick/frame.

    --- @param callback function
    --- @return nil
    NextTick(callback)

    Arguments:
        callback - function - The function to execute next frame
]]

commands:Register("nexttick", function (playerid, args, argsCount, silent, prefix)
    NextTick(function()
        print("This runs at next server tick!")
    end)
end)

--[[
    SetTimeout
    Executes a callback once after specified delay.

    This function executes a callback once after specified delay.

    --- @param delay number
    --- @param callback function
    --- @return nil
    SetTimeout(delay, callback)

    Arguments:
        delay - number - Delay in milliseconds before execution
        callback - function - Function to trigger
]]

commands:Register("settimeout", function (playerid, args, argsCount, silent, prefix)
    SetTimeout(3000, function()
        print("3 seconds elapsed!")
    end)
end)

--[[
    SetTimer
    Creates a recurring timer that executes at intervals.

    This function creates a recurring timer that executes at intervals.
    
    --- @param delay number
    --- @param callback function
    --- @return TimerHandle
    SetTimer(delay, callback)

    Arguments:
        delay - number - Interval between executions (milliseconds)
        callback - function - Function to trigger
        
    Returns:
        TimerHandle - Unique identifier for the timer.
]]

commands:Register("settimer", function (playerid, args, argsCount, silent, prefix)
    SetTimer(1000, function()
        print("This runs every second!")
    end)
end)

--[[
    StopTimer
    Terminates a running timer created with SetTimer.

    This function terminates a running timer created with SetTimer.

    --- @param timerid TimerHandle
    --- @return nil
    StopTimer(timerid)
    
    Arguments:
        timerid - TimerHandle - Identifier from SetTimer
]]

commands:Register("startstop", function (playerid, args, argsCount, silent, prefix)
    local timer = SetTimer(1000, function () end)
    SetTimeout(5000, function ()
        StopTimer(timer)
    end)
    -- Start and stop timer after 5 seconds.
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
    return "[Lua] Timers Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end