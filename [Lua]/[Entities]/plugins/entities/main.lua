--[[ 
    AddHookEntityOutput
    Adds a hook output for an entity.

    --- @param className string
    --- @param output string
    --- @return HookHandle
    AddHookEntityOutput(className, output)

    This function registers a hook for an entity's output event.
]]
commands:Register("hookentity", function(playerid, args, argsCount, silent, prefix)
    local hookHandle = AddHookEntityOutput("weapon_knife", "*")
    AddPreHookListener(hookHandle, function(event, iooutput, event_output, activator, caller, delay)
        print("Entity output hooked!")
        return EventResult.Continue
    end)
end)

--[[ 
    CEntityKeyValues
    Constructor for the entity key values object.

    --- @return CEntityKeyValues
    CEntityKeyValues()

    This object provides functions to get and set various key values for an entity.

    Available Methods:
        GetBool(key: string): boolean
        GetInt(key: string): number
        GetUint(key: string): number
        GetInt64(key: string): number
        GetUint64(key: string): number
        GetFloat(key: string): number
        GetDouble(key: string): number
        GetString(key: string): string
        GetPtr(key: string): string
        GetStringToken(key: string): number
        GetColor(key: string): Color
        GetVector(key: string): Vector
        GetVector2D(key: string): Vector2D
        GetVector4D(key: string): Vector4D
        GetQAngle(key: string): QAngle

        SetBool(key: string, value: boolean): nil
        SetInt(key: string, value: number): nil
        SetUint(key: string, value: number): nil
        SetInt64(key: string, value: number): nil
        SetUint64(key: string, value: number): nil
        SetFloat(key: string, value: number): nil
        SetDouble(key: string, value: number): nil
        SetString(key: string, value: string): nil
        SetPtr(key: string, value: string): nil
        SetStringToken(key: string, value: number): nil
        SetColor(key: string, value: Color): nil
        SetVector(key: string, value: Vector): nil
        SetVector2D(key: string, value: Vector2D): nil
        SetVector4D(key: string, value: Vector4D): nil
        SetQAngle(key: string, value: QAngle): nil

        -- still need example, don't merge yet
]]

--[[ 
    CreateEntityByName
    Creates an entity by its class name.

    --- @param className string
    --- @return CEntityInstance
    CreateEntityByName(className)

    This function creates an entity with the provided class name.
]]
commands:Register("createentity", function(playerid, args, argsCount, silent, prefix)
    local entity = CreateEntityByName("prop_dynamic")
end)

--[[ 
    FindEntitiesByClassname
    Returns all the entity instances with the specified classname.

    --- @param className string
    --- @return table
    FindEntitiesByClassname(className)

    This function returns a table containing all entities that match the given classname.
]]
commands:Register("findentities", function(playerid, args, argsCount, silent, prefix)
    local entities = FindEntitiesByClassname("prop_dynamic")
    print("Found " .. #entities .. " entities with classname 'prop_dynamic'")
end)

--[[ 
    Plugin Core Functions
]]
function GetPluginAuthor()
    return "Swiftly Solution"
end

function GetPluginVersion()
    return "1.0.0"
end

function GetPluginName()
    return "[Lua] Entities Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end
