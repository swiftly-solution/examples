/**
    PrecacheItem
    Adds any kind of item to the precacher (including sound and models).

    This function adds any kind of item to the precacher (including sound and models).

    * @param {string} path
    * @return {null|undefined}
    precacher.PrecacheItem(path)

    Arguments:
        path - string - The path to the item that needs precached.
*/

AddEventHandler("OnPluginStart", function(){
    precacher.PrecacheItem("characters/models/ctm_fbi/ctm_fbi.vmdl")
})

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
    return "[Javascript] Precacher Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}