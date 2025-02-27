--[[
    RemoveText
    Destroys a VGUI element by its unique ID.

    This function destroys a VGUI element by its unique ID.

    --- @param textID number
    --- @return nil
    vgui:RemoveText(textID)

    Arguments:
        textID - number - The identifier returned by ShowText when creating the element.
]]

commands:Register("removetext", function (playerid, args, argsCount, silent, prefix)
    local textId = vgui:ShowText(playerid, Color(255,255,255,255), "Temp Message", 0.5, 0.5, "Arial")
    vgui:RemoveText(textId)
end)

--[[
    SetTextMessage
    Updates the text of an existing VGUI element.

    This function updates the text of an existing VGUI element.

    --- @param textID number
    --- @param message string
    --- @return nil
    vgui:SetTextMessage(textID, message)

    Arguments:
        textID - number - The identifier returned by ShowText when creating the element.
        message - string - The new text.
]]

commands:Register("updatetext", function (playerid, args, argsCount, silent, prefix)
    vgui:SetTextMessage(3, "New text!")
end)

--[[
    SetTextPosition
    Changes the screen position of a VGUI element.

    This function changes the screen position of a VGUI element.
    
    --- @param textID number
    --- @param posX number
    --- @param posY number
    --- @return nil
    vgui:SetTextPosition(textID, posX, posY)

    Arguments:
        textID - number - The identifier returned by ShowText when creating the element.
        posX - number - Horizontal position (0.0=left, 1.0=right)
        posY - number - Vertical position (1.0=top, 0.0=bottom)
]]

commands:Register("updateposition", function (playerid, args, argsCount, silent, prefix)
    vgui:SetTextPosition(3, 0.95, 0.90)
end)

--[[
    ShowText
    Creates and displays a VGUI text element to a specific player.

    This function creates and displays a VGUI text element to a specific player.
    
    --- @param playerid number
    --- @param color Color
    --- @param text string
    --- @param posX number
    --- @param posY number
    --- @param font_name string
    --- @param background boolean|nil
    --- @return number
    vgui:ShowText(playerid, color, text, posX, posY, font_name, background)

    Arguments:
        playerid - number - The playerid to display the text to.
        color - Color - Color object (e.g Color(255,0,0,255)) RGBA.
        text - string - The text to display.
        posX - number - Horizontal anchor (0.0-1.0)
        posY - number - Vertical anchor (0.0-1.0)
        font_name - string - System font name ("Arial", "Tahoma", etc)
        background - boolean|nil - [Optional] Show background panel
        
    Returns:
        number - Unique text ID for later manipulation
]]

commands:Register("showtext", function (playerid, args, argsCount, silent, prefix)
    local welcomeId = vgui:ShowText(playerid, Color(0,255,0,255), "Welcome!", 0.5, 0.1, "Verdana", true)
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
    return "[Lua] VGUI Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end