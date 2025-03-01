/**
 * Files API
 * All paths are relative to game/csgo directory
 */

/**
 * Append
 * Adds content to end of file with optional timestamp.
 *
 * This function adds content to the end of a file with an optional timestamp header.
 *
 * @param {string} path - File path.
 * @param {string} content - Text to append.
 * @param {boolean} hasdate - Whether to prepend a timestamp before the content.
 * @returns {void}
 * files.Append(path, content, hasdate)
 */
commands.register("append", (playerId, args, argc, silent, prefix) => {
    files.Append("test/test.log", "Test!", true);
});

/**
 * Compress
 * Creates a compressed archive from a file.
 *
 * This function creates a compressed archive from a source file.
 *
 * @param {string} path - Source file path.
 * @param {string} output - Destination .zip path.
 * @returns {boolean} - True if successful.
 * files.Compress(path, output)
 */
commands.register("compress", (playerId, args, argc, silent, prefix) => {
    if (files.Compress("logs/error.log", "archives/errors.zip")) {
        console.log("Compression succeeded");
    } else {
        console.log("Compression failed");
    }
});

/**
 * CreateDirectory
 * Creates a new folder structure.
 *
 * This function creates a new directory structure.
 *
 * @param {string} path - Directory path.
 * @returns {boolean} - True if created successfully.
 * files.CreateDirectory(path)
 */
commands.register("createdir", (playerId, args, argc, silent, prefix) => {
    if (files.CreateDirectory("addons/swiftly/plugins/test")) {
        console.log("Directory created successfully");
    } else {
        console.log("Failed to create directory");
    }
});

/**
 * Decompress
 * Extracts a compressed file.
 *
 * This function extracts the contents of a compressed archive.
 *
 * @param {string} path - Archive path.
 * @param {string} output - Extraction directory.
 * @returns {boolean} - True if successful.
 * files.Decompress(path, output)
 */
commands.register("decompress", (playerId, args, argc, silent, prefix) => {
    if (files.Decompress("update.zip", "new_version/")) {
        console.log("Decompression succeeded");
    } else {
        console.log("Decompression failed");
    }
});

/**
 * Delete
 * Permanently removes a file.
 *
 * This function permanently deletes a file from the system.
 *
 * @param {string} path - File path to delete.
 * @returns {void}
 * files.Delete(path)
 */
commands.register("delete", (playerId, args, argc, silent, prefix) => {
    files.Delete("addons/swiftly/logs/log_1.log");
    console.log("File deleted");
});

/**
 * ExistsPath
 * Checks file or directory existence.
 *
 * This function checks whether a given file or directory exists.
 *
 * @param {string} path - Path to check.
 * @returns {boolean} - True if the path exists.
 * files.ExistsPath(path)
 */
commands.register("exists", (playerId, args, argc, silent, prefix) => {
    if (files.ExistsPath("test.json")) {
        console.log("Config file present");
    } else {
        console.log("Config file not found");
    }
});

/**
 * FetchDirectories
 * Lists subdirectories in a given directory.
 *
 * This function returns an array of subdirectory names within the specified directory.
 *
 * @param {string} path - Directory to scan.
 * @returns {Array<string>} - Array of directory names.
 * files.FetchDirectories(path)
 */
commands.register("fetchdirs", (playerId, args, argc, silent, prefix) => {
    const dirs = files.FetchDirectories("addons/swiftly/plugins");
    for (let i = 0; i < dirs.length; i++) {
        console.log("Found plugin: " + dirs[i]);
    }
});

/**
 * FetchFileNames
 * Lists files in a directory.
 *
 * This function returns an array of filenames within the specified directory.
 *
 * @param {string} path - Directory to scan.
 * @returns {Array<string>} - Array of filenames.
 * files.FetchFileNames(path)
 */
commands.register("fetchfiles", (playerId, args, argc, silent, prefix) => {
    const filesList = files.FetchFileNames("addons/swiftly/configs");
    console.log("All configs: " + filesList.join(", "));
});

/**
 * GetBase
 * Extracts the filename from a full path.
 *
 * This function extracts and returns the base filename from a complete file path.
 *
 * @param {string} path - Full file path.
 * @returns {string} - Base filename.
 * files.GetBase(path)
 */
commands.register("getbase", (playerId, args, argc, silent, prefix) => {
    const name = files.GetBase("cfg/autoexec.cfg");
    console.log("Base filename: " + name);
});

/**
 * IsDirectory
 * Checks if a path is a directory.
 *
 * This function determines if the given path refers to a directory.
 *
 * @param {string} path - Path to check.
 * @returns {boolean} - True if it is a directory.
 * files.IsDirectory(path)
 */
commands.register("isdir", (playerId, args, argc, silent, prefix) => {
    if (files.IsDirectory("test")) {
        console.log("This is a folder");
    } else {
        console.log("Not a folder");
    }
});

/**
 * Read
 * Retrieves file contents.
 *
 * This function reads the content of a file and returns it as a string (or null if not available).
 *
 * @param {string} path - File path.
 * @returns {string|null} - File content or null.
 * files.Read(path)
 */
commands.register("read", (playerId, args, argc, silent, prefix) => {
    const content = files.Read("addons/swiftly/configs/settings.json");
    if (content) {
        console.log("File contents: " + content);
    } else {
        console.log("Failed to read file");
    }
});

/**
 * Write
 * Writes content to a file (creates or overwrites).
 *
 * This function writes text to a file and can optionally prepend a timestamp header.
 *
 * @param {string} path - File path.
 * @param {string} content - Text to write.
 * @param {boolean} hasdate - Whether to add a timestamp header.
 * @returns {void}
 * files.Write(path, content, hasdate)
 */
commands.register("write", (playerId, args, argc, silent, prefix) => {
    files.Write("addons/swiftly/important/important.txt", "Important data", true);
    console.log("File written");
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
    return "[Javascript] Files Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}