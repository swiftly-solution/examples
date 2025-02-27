--[[
    PrecacheItem
    Adds any kind of item to the precacher (including sound and models).

    This function adds any kind of item to the precacher (including sound and models).

    --- @param path string
    --- @return nil
    precacher:PrecacheItem(path)

    Arguments:
        path - string - The path to the item that needs precached.
]]

AddEventHandler("OnPluginStart", function()
    precacher:PrecacheItem("characters/models/ctm_fbi/ctm_fbi.vmdl")
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
    return "[Lua] Precache Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end