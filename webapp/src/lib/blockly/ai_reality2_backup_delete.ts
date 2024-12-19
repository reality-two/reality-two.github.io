// ----------------------------------------------------------------------------------------------------
// A Blockly Block
// ----------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------
// Block Definition
// ----------------------------------------------------------------------------------------------------
const shape = {
	"type":"ai_reality2_backup_delete",
    "message0":"delete saved data",
	"previousStatement":null,
	"nextStatement":null,
    "colour": 360,
    "tooltip": "Delete encrypted blob from database on this node.  Remember to set the encryption and decryption keys in the Bee header.",
    "helpUrl": "https://github.com/reality-two/reality2-documentation"
}
// ----------------------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------------------------
// Process Block
// ----------------------------------------------------------------------------------------------------
function process(block: any, generator: any): string | [string, number] | null
{
    const action: any = {
        "plugin": "ai.reality2.backup",
        "command": "delete"
    };

    return (JSON.stringify(action));
}
// ----------------------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------------------------
// Create a blockly block object from the JSON
// ----------------------------------------------------------------------------------------------------
function construct(action: any)
{
    if (action) {
        // Set the initial structure
        let block = {
            "kind": "BLOCK",
            "type": "ai_reality2_backup_delete"
        }
        
        return (block);
    }
    else {
        return null;
    }
}
// ----------------------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------------------------
// Export defaults
// ----------------------------------------------------------------------------------------------------
export default {shape, process, construct};
// ----------------------------------------------------------------------------------------------------