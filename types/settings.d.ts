/**
 * Represents a generic property with a title, description, and type.
 */
export declare class Property {
    title: string;
    description: string;
    type: 'boolean' | 'number' | 'string' | 'array';
    constructor(type: 'boolean' | 'number' | 'string' | 'array');
    /**
     * Sets the title of the property.
     */
    setTitle(title: string): Property;
    /**
     * Sets the description of the property.
     */
    setDescription(description: string): Property;
}
/**
 * Represents a boolean property with a default value.
 */
export declare class BooleanProperty extends Property {
    default: boolean;
    constructor();
    /**
     * Sets the default value of the boolean property.
     */
    setDefault(_default: boolean): BooleanProperty;
}
/**
 * Represents a numeric property with optional constraints.
 */
export declare class NumberProperty extends Property {
    minimum: number;
    maximum: number;
    default: number;
    constructor();
    /**
     * Sets the minimum value constraint.
     */
    setMinimum(min: number): NumberProperty;
    /**
     * Sets the maximum value constraint.
     */
    setMaximum(max: number): NumberProperty;
    /**
     * Sets the default value.
     */
    setDefault(_default: number): NumberProperty;
}
/**
 * Represents a string property with optional constraints.
 */
export declare class StringProperty extends Property {
    default: string;
    enum: Array<string>;
    editor: boolean;
    required: boolean;
    constructor();
    /**
     * Sets the default value of the string property.
     */
    setDefault(_default: string): StringProperty;
    /**
     * Defines allowed values for the string property.
     */
    allowedValues(_enum: Array<string>): StringProperty;
    /**
     * Enables or disables the text editor for this property.
     */
    textEditor(enable: boolean): StringProperty;
    /**
     * Marks the string property as required.
     */
    setRequired(required: boolean): StringProperty;
}
/**
 * Represents an item in an array property with associated metadata.
 */
export declare class ArrayItems {
    properties: {
        [name: string]: StringProperty | NumberProperty | BooleanProperty;
    };
    title: string;
    draggable: boolean;
    type: string;
    constructor();
}
/**
 * Represents an array property with defined item structure.
 */
export declare class ArrayProperty extends Property {
    items: ArrayItems;
    constructor();
    /**
     * Sets the title for the items in the array.
     */
    itemTitle(title: string): ArrayProperty;
    /**
     * Enables or disables draggable items in the array.
     */
    itemsDraggable(draggable: boolean): ArrayProperty;
    /**
     * Adds a property to the array items.
     */
    addItemProperty(name: string, property: StringProperty | NumberProperty | BooleanProperty): ArrayProperty;
}
/**
 * Represents application settings with configurable properties.
 */
export declare class Settings {
    properties: {
        [name: string]: ArrayProperty | StringProperty | NumberProperty | BooleanProperty;
    };
    type: string;
    /**
     * Adds a new property to the settings configuration.
     */
    addProperty(name: string, property: ArrayProperty | StringProperty | NumberProperty | BooleanProperty): Settings;
}
