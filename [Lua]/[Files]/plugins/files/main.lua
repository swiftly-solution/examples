--[[
    Files API
    All paths are relative to game/csgo directory
]]

--[[
    Append
    Adds content to end of file with optional timestamp

    This function adds content to the end of a file with an optional timestamp header.

    --- @param path string
    --- @param content string
    --- @param hasdate boolean
    --- @return nil
    files:Append(path, content, hasdate)
]]
commands:Register("append", function(playerid, args, argsCount, silent, prefix)
    files:Append("test/test.log", "Test!", true)
end)

--[[
    Compress
    Creates a compressed archive from a file

    This function creates a compressed archive from a source file.

    --- @param path string
    --- @param output string
    --- @return boolean
    files:Compress(path, output)
]]
commands:Register("compress", function(playerid, args, argsCount, silent, prefix)
    if files:Compress("logs/error.log", "archives/errors.zip") then
        print("Compression succeeded")
    else
        print("Compression failed")
    end
end)

--[[
    CreateDirectory
    Creates a new folder structure

    This function creates a new directory structure.

    --- @param path string
    --- @return boolean
    files:CreateDirectory(path)
]]
commands:Register("createdir", function(playerid, args, argsCount, silent, prefix)
    if files:CreateDirectory("addons/swiftly/plugins/test") then
        print("Directory created successfully")
    else
        print("Failed to create directory")
    end
end)

--[[
    Decompress
    Extracts a compressed file

    This function extracts the contents of a compressed archive.

    --- @param path string
    --- @param output string
    --- @return boolean
    files:Decompress(path, output)
]]
commands:Register("decompress", function(playerid, args, argsCount, silent, prefix)
    if files:Decompress("update.zip", "new_version/") then
        print("Decompression succeeded")
    else
        print("Decompression failed")
    end
end)

--[[
    Delete
    Permanently removes a file

    This function permanently deletes a file from the system.

    --- @param path string
    --- @return nil
    files:Delete(path)
]]
commands:Register("delete", function(playerid, args, argsCount, silent, prefix)
    files:Delete("addons/swiftly/logs/log_1.log")
    print("File deleted")
end)

--[[
    ExistsPath
    Checks file or directory existence

    This function checks whether a given file or directory exists.

    --- @param path string
    --- @return boolean
    files:ExistsPath(path)
]]
commands:Register("exists", function(playerid, args, argsCount, silent, prefix)
    if files:ExistsPath("test.json") then
        print("Config file present")
    else
        print("Config file not found")
    end
end)

--[[
    FetchDirectories
    Lists subdirectories in a given directory

    This function returns an array of subdirectory names within the specified directory.

    --- @param path string
    --- @return table
    files:FetchDirectories(path)
]]
commands:Register("fetchdirs", function(playerid, args, argsCount, silent, prefix)
    local dirs = files:FetchDirectories("addons/swiftly/plugins")
    for i = 1, #dirs do
        print("Found plugin: " .. dirs[i])
    end
end)

--[[
    FetchFileNames
    Lists files in a directory

    This function returns an array of filenames within the specified directory.

    --- @param path string
    --- @return table
    files:FetchFileNames(path)
]]
commands:Register("fetchfiles", function(playerid, args, argsCount, silent, prefix)
    local filesList = files:FetchFileNames("addons/swiftly/configs")
    print("All configs: " .. table.concat(filesList, ", "))
end)

--[[
    GetBase
    Extracts the filename from a full path

    This function extracts and returns the base filename from a complete file path.

    --- @param path string
    --- @return string
    files:GetBase(path)
]]
commands:Register("getbase", function(playerid, args, argsCount, silent, prefix)
    local name = files:GetBase("cfg/autoexec.cfg")
    print("Base filename: " .. name)
end)

--[[
    IsDirectory
    Checks if a path is a directory

    This function determines if the given path refers to a directory.

    --- @param path string
    --- @return boolean
    files:IsDirectory(path)
]]
commands:Register("isdir", function(playerid, args, argsCount, silent, prefix)
    if files:IsDirectory("test") then
        print("This is a folder")
    else
        print("Not a folder")
    end
end)

--[[
    Read
    Retrieves file contents

    This function reads the content of a file and returns it as a string (or nil if not available).

    --- @param path string
    --- @return string|nil
    files:Read(path)
]]
commands:Register("read", function(playerid, args, argsCount, silent, prefix)
    local content = files:Read("addons/swiftly/configs/settings.json")
    if content then
        print("File contents: " .. content)
    else
        print("Failed to read file")
    end
end)

--[[
    Write
    Writes content to a file (creates or overwrites)

    This function writes text to a file and can optionally prepend a timestamp header.

    --- @param path string
    --- @param content string
    --- @param hasdate boolean
    --- @return nil
    files:Write(path, content, hasdate)
]]
commands:Register("write", function(playerid, args, argsCount, silent, prefix)
    files:Write("addons/swiftly/important/important.txt", "Important data", true)
    print("File written")
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
    return "[Lua] Files Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end