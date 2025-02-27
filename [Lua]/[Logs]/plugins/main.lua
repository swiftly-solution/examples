--[[
    Write
    Writes a specific text in the plugin's log file.

    This function writes a specific text in the plugin's log file.

    --- @param log_type LogType_t
    --- @param text string
    --- @return nil
    logger:Write(log_type, text)

    Arguments:
        log_type - LogType_t - The log type, which can be: Debug, Warning, Error or Common, you can find them here: https://swiftlycs2.net/sdk/coretypes/logtype_t
        text - string - The text to log.
]]

AddEventHandler("OnPlayerConnectFull", function(event)
    local playerid = event:GetInt("userid")
    local player = GetPlayer(playerid)
    if not player or not player:IsValid() then return end

    if not player:CBasePlayerController():IsValid() then return end
    logger:Write(LogType_t.Common, "The player: " .. player:CBasePlayerController().PlayerName .. " joined the server!")
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
    return "[Lua] Logs Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end