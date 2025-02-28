--[[

    config:Create(config_key, value)

    --- @param config_key string
    --- @param value table
    --- @return nil
    The config_key field supports nested configuration. Example: folder1/folder2/config_key, 
    resulting in fetching to folder1.folder2.config_key. The value needs to be a pair of key-values 
    table in initial state, after it can also include lists and nested tables.

    By default, the configuration is stored in /swiftly/configs/plugins/. The system automatically 
    creates JSON files if they do not exist. However, you can manually create and edit the 
    configuration files if needed.
]]

AddEventHandler("OnPluginStart", function (event)
    config:Create("configuration", { -- This will create a configuration at /swiftly/configs/plugins/configuration.json
        test = "Test",
        test2 = {
            test3 = "Test3"
        },
        test3 = {1,3,5,10}
    })
    return EventResult.Continue
end)

--[[
    config:Exists(key)

    --- @param key string
    --- @return boolean
    Checks if the given configuration key exists. 

    The key supports nested paths, for example: "folder1/folder2/config_key",
    which corresponds to "folder1.folder2.config_key" in the configuration structure.

    This function returns `true` if the configuration key exists, otherwise `false`.
]]

commands:Register("configexists", function (playerid, args, argsCount, silent, prefix)
    if config:Exists("configuration.test") then
        print("Configuration key'test' exists!")
    else
        print("Configuration 'test' does not exist!")
    end
end)

--[[
    config:Fetch(key)

    --- @param key string
    --- @return any
    Returns the configuration value for the specified key.

    The key supports nested paths, for example: "folder1/folder2/config_key",
    which corresponds to "folder1.folder2.config_key" in the configuration structure.

    If the key is invalid or does not exist, this function returns `nil`.
    If the key exists and its value is a table, the entire table is returned.

    Note: Configuration files are stored in /swiftly/configs/plugins/. 
    If a configuration key does not exist, you can create and edit the JSON files manually.
]]

commands:Register("configfetch", function (playerid, args, argsCount, silent, prefix)
    local value = config:Fetch("configuration.test2")
    if value then
        if type(value) == "table" then
            print("Configuration is a table:")
            for k, v in pairs(value) do
                print(k, v)
            end
        else
            print("Configuration value:", value)
        end
    else
        print("Configuration key not found.")
    end
end)

--[[
    config:FetchArraySize(key)

    --- @param key string
    --- @return number
    Returns the array size of the configuration value for the specified key.

    If the key exists and its value is an array, the function returns the number of elements in the array.
    If the key is invalid, or the value is not an array, it returns 0.
]]

commands:Register("configfetchsize", function (playerid, args, argsCount, silent, prefix)
    local size = config:FetchArraySize("configuration.test3")
    if size > 0 then
        print("Array size:", size)
    else
        print("Configuration key is not an array or does not exist.")
    end
end)

--[[
    config:Reload(key)

    --- @param key string
    --- @return nil
    Reloads the configuration for the specified key.

    This function reloads the configuration file associated with the specified key.
]]

commands:Register("configreload", function (playerid, args, argsCount, silent, prefix)
    config:Reload("configuration")
    print("Configuration reloaded for 'configuration'")
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
    return "[Lua] Configuration Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end