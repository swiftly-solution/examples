/**
    Translation System Setup
    Creating and Using Translation Files

    File Structure:
        1. Create JSON files in /translations/ directory
        2. Naming format: translation.[MAIN_KEY].json
        3. Structure entries as "SUB_KEYS": { language_code: "text" }

    An example file can be found in the provided .json file example.
*/

/**
    FetchTranslation
    Retrieves localized text for a translation key based on player/server language.

    This functions retrieves localized text for a translation key based on player/server language.

    * @param {string} key
    * @param {number|null} playerid
    * @return {string}
    FetchTranslation(key, playerid)

    Arguments:
        key - string - Translation path in format "MAIN_KEY.SUB_KEY" (e.g., "first_plugin.welcome")
        playerid - number|nil - [Optional] Target Player ID, if you use this, it will get the player's language from the client and if there is a key for that language, it will use that key.

    - If you don't use player targetting, then the default language would be the one set in core.json.
    - If the translation doesn't exist, you will get back the key, not the translation.
*/

commands.Register("welcome", (playerid, args, argc, silent, prefix) => {
    let player = GetPlayer(playerid)
    if (!player || !player.IsValid()) return;
    player.SendMsg(MessageType.Chat, FetchTranslation("first_plugin.welcome", playerid))
});

/**
    You can also use replace for placeholders, for example, this is an example translation.
    {
        "credits": {
            "en": "You have {credits} credits.",
            "ro": "Ai: {credits} credite."
        }
    }
*/

commands.Register("credits", (playerid, args, argc, silent, prefix) => {
    let player = GetPlayer(playerid)
    if (!player || !player.IsValid()) return;
    let credits = 50
    player.SendMsg(MessageType.Chat, FetchTranslation("first_plugin.credits", playerid).replace("{credits}", String(credits)))
});