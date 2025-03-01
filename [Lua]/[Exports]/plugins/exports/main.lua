--[[
    Call Export
    Calls the specified export.

    This function calls the specified export.
    
    --- @param ... any
    --- @return any
    exports["PLUGIN_NAME"]:EXPORT_NAME(...)
]]

commands:Register("testexport", function (playerid, args, argsCount, silent, prefix)
    local player = GetPlayer(playerid)
    if not player or not player:IsValid() then return end

    if not exports["admins"]:HasFlags(playerid, "b") then
        return player:SendMsg(MessageType.Chat, "You don't have the right flag for this command!")
    end
end)

--[[
    Register Export
    Registers an export for this plugin.

    This function registers an export for this plugin.
    
    --- @param exportName string
    --- @param callback fun(...)
    --- @return nil
    export(exportName, callback)
]]

export("GetCredits", function (playerid)
    local player = GetPlayer(playerid)
    if not player then return 0 end
    if player:IsFakeClient() then return 0 end

    return player:GetVar("credits")
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
    return "[Lua] Exports Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end