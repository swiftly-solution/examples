/**
 * AddHookEntityOutput
 * Adds a hook output for an entity.
 *
 * @param {string} className - The class name.
 * @param {string} output - The output string.
 * @returns {HookHandle}
 *
 * This function registers a hook for an entity's output event.
 */
commands.register("hookentity", (playerid, args, argsCount, silent, prefix) => {
    let hookHandle = AddHookEntityOutput("weapon_knife", "*");
    AddPreHookListener(hookHandle, (event, iooutput, event_output, activator, caller, delay) => {
        console.log("Entity output hooked!");
        return EventResult.Continue;
    });
});

/**
 * CEntityKeyValues
 * Constructor for the entity key values object.
 *
 * @returns {CEntityKeyValues}
 *
 * This object provides functions to get and set various key values for an entity.
 *
 * Available Methods:
 *   GetBool(key: string): boolean
 *   GetInt(key: string): number
 *   GetUint(key: string): number
 *   GetInt64(key: string): number
 *   GetUint64(key: string): number
 *   GetFloat(key: string): number
 *   GetDouble(key: string): number
 *   GetString(key: string): string
 *   GetPtr(key: string): string
 *   GetStringToken(key: string): number
 *   GetColor(key: string): Color
 *   GetVector(key: string): Vector
 *   GetVector2D(key: string): Vector2D
 *   GetVector4D(key: string): Vector4D
 *   GetQAngle(key: string): QAngle
 *
 *   SetBool(key: string, value: boolean): null
 *   SetInt(key: string, value: number): null
 *   SetUint(key: string, value: number): null
 *   SetInt64(key: string, value: number): null
 *   SetUint64(key: string, value: number): null
 *   SetFloat(key: string, value: number): null
 *   SetDouble(key: string, value: number): null
 *   SetString(key: string, value: string): null
 *   SetPtr(key: string, value: string): null
 *   SetStringToken(key: string, value: number): null
 *   SetColor(key: string, value: Color): null
 *   SetVector(key: string, value: Vector): null
 *   SetVector2D(key: string, value: Vector2D): null
 *   SetVector4D(key: string, value: Vector4D): null
 *   SetQAngle(key: string, value: QAngle): null
 *
 *   -- still need example, don't merge yet
 */

/**
 * CreateEntityByName
 * Creates an entity by its class name.
 *
 * @param {string} className - The class name of the entity.
 * @returns {CEntityInstance}
 *
 * This function creates an entity with the provided class name.
 */
commands.register("createentity", (playerid, args, argsCount, silent, prefix) => {
    let entity = CreateEntityByName("prop_dynamic");
});

/**
 * FindEntitiesByClassname
 * Returns all the entity instances with the specified classname.
 *
 * @param {string} className - The class name to search for.
 * @returns {Object}
 *
 * This function returns an array containing all entities that match the given classname.
 */
commands.register("findentities", (playerid, args, argsCount, silent, prefix) => {
    let entities = FindEntitiesByClassname("prop_dynamic");
    console.log("Found " + entities.length + " entities with classname 'prop_dynamic'");
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
    return "[Javascript] Entities Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}