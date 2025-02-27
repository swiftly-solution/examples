/**
    RemoveText
    Destroys a VGUI element by its unique ID.

    This function destroys a VGUI element by its unique ID.

    * @param {number} textID
    * @return {null|undefined}
    vgui:RemoveText(textID)

    Arguments:
        textID - number - The identifier returned by ShowText when creating the element.
*/

commands.Register("removetext", (playerid, args, argc, silent, prefix) => {
    let textId = vgui.ShowText(playerid, Color(255,255,255,255), "Temp Message", 0.5, 0.5, "Arial")
    vgui.RemoveText(textId)
});

/**
    SetTextMessage
    Updates the text of an existing VGUI element.

    This function updates the text of an existing VGUI element.

    * @param {number} textID
    * @param {string} message
    * @return {null|undefined}
    vgui:SetTextMessage(textID, message)

    Arguments:
        textID - number - The identifier returned by ShowText when creating the element.
        message - string - The new text.
*/

commands.Register("updatetext", (playerid, args, argc, silent, prefix) => {
    vgui.SetTextMessage(3, "New text!")
});

/**
    SetTextPosition
    Changes the screen position of a VGUI element.

    This function changes the screen position of a VGUI element.
    
    * @param {number} textID
    * @param {number} posX
    * @param {number} posY
    * @return {null|undefined}
    vgui:SetTextPosition(textID, posX, posY)

    Arguments:
        textID - number - The identifier returned by ShowText when creating the element.
        posX - number - Horizontal position (0.0=left, 1.0=right)
        posY - number - Vertical position (1.0=top, 0.0=bottom)
*/

commands.Register("updateposition", (playerid, args, argc, silent, prefix) => {
    vgui.SetTextPosition(3, 0.95, 0.90)
});

/**
    ShowText
    Creates and displays a VGUI text element to a specific player.

    This function creates and displays a VGUI text element to a specific player.
    
    * @param {number} playerid
    * @param {Color} color
    * @param {string} text
    * @param {number} posX
    * @param {number} posY
    * @param {string} font_name
    * @param {boolean|null} background
    * @return {number}
    vgui.ShowText(playerid, color, text, posX, posY, font_name, background)

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
*/

commands.Register("showtext", (playerid, args, argc, silent, prefix) => {
    let welcomeId = vgui.ShowText(playerid, Color(0,255,0,255), "Welcome!", 0.5, 0.1, "Verdana", true)
});

/**
    Core Functions
*/
function GetPluginAuthor() {
    return "Swiftly Solution";
}

function GetPluginVersion() {
    return "1.0.0";
}

function GetPluginName() {
    return "[Javascript] VGUI Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}