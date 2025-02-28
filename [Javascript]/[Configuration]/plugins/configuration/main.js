/**
    config.Create(config_key, value)

    * @param {string} config_key
    * @param {Object} value
    * @return {null|undefined}
    * 
    The config_key field supports nested configuration. Example: folder1/folder2/config_key, 
    resulting in fetching to folder1.folder2.config_key. The value needs to be a pair of key-values 
    table in initial state, after it can also include lists and nested tables.

    By default, the configuration is stored in /swiftly/configs/plugins/. The system automatically 
    creates JSON files if they do not exist. However, you can manually create and edit the 
    configuration files if needed.
*/
AddEventHandler("OnPluginStart", (event) => {
    config.Create("configuration", {
        test : "Test",
        test2 : {
            test3 : "Test3"
        },
        test3 : [1,3,5,10]
    });
    return EventResult.Continue;
});

/**
    config.Exists(key)

    * @param {string} key
    * @return {boolean}
    Checks if the given configuration key exists. 

    The key supports nested paths, for example: "folder1/folder2/config_key",
    which corresponds to "folder1.folder2.config_key" in the configuration structure.

    This function returns `true` if the configuration key exists, otherwise `false`.
*/
commands.Register("configexists", (playerid, args, argc, silent, prefix) => {
    if (config.Exists("configuration.test")) {
        console.log("Configuration key'test' exists!");
    }else {
        console.log("Configuration 'test' does not exist!");
        
    }
});

/**
    config.Fetch(key)

    * @param {string} key
    * @return {any}
    Returns the configuration value for the specified key.

    The key supports nested paths, for example: "folder1/folder2/config_key",
    which corresponds to "folder1.folder2.config_key" in the configuration structure.

    If the key is invalid or does not exist, this function returns `nil`.
    If the key exists and its value is a table, the entire table is returned.

    Note: Configuration files are stored in /swiftly/configs/plugins/. 
    If a configuration key does not exist, you can create and edit the JSON files manually.
*/

commands.Register("configfetch", (playerid, args, argc, silent, prefix) => {
    let value = config.Fetch("configuration.test");
    if (value) {
        if(typeof(value) == "table") {
            console.log("Configuration key'test' exists and the value is a table!");
        }else if(typeof(value) == "object") {
            console.log("Configuration key'test' exists and the value is an object!");
        }else {
            console.log("Configuration key'test' exists and the value is: " + value);
        }
    } else {
        console.log("Configuration 'test' does not exist!");
    }
});

/**
    config.FetchArraySize(key)

    * @param {string} key
    * @return {number}
    Returns the array size of the configuration value for the specified key.

    If the key exists and its value is an array, the function returns the number of elements in the array.
    If the key is invalid, or the value is not an array, it returns 0.
*/
commands.Register("configfetchsize", (playerid, args, argc, silent, prefix) => {
    let size = config.FetchArraySize("configuration.test3")
    if(size > 0) {
        console.log("Configuration key'test3' exists and the array size is " + size);
    } else {
        console.log("Configuration 'test3' does not exist or is not an array!");
    }
});

/** 
    config.Reload(key)

    --- @param key string
    --- @return nil
    Reloads the configuration for the specified key.

    This function reloads the configuration file associated with the specified key.
*/
commands.Register("configreload", (playerid, args, argc, silent, prefix) => {
    config.Reload("configuration");
    console.log("Configuration reloaded for 'configuration'");
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
    return "[Javascript] Configuration Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}