export declare class Property {
    title: string;
    description: string;
    type: 'boolean' | 'number' | 'string' | 'array';
    constructor(type: 'boolean' | 'number' | 'string' | 'array');
    setTitle(title: string): Property;
    setDescription(description: string): Property;
}
export declare class BooleanProperty extends Property {
    default: boolean;
    constructor();
    setDefault(_default: boolean): BooleanProperty;
    setTitle(title: string): BooleanProperty;
    setDescription(description: string): BooleanProperty;
}
export declare class NumberProperty extends Property {
    minimum: number;
    maximum: number;
    default: number;
    constructor();
    setMinimum(min: number): NumberProperty;
    setMaximum(max: number): NumberProperty;
    setDefault(_default: number): NumberProperty;
    setTitle(title: string): NumberProperty;
    setDescription(description: string): NumberProperty;
}
export declare class StringProperty extends Property {
    default: string;
    enum: Array<string>;
    editor: boolean;
    required: boolean;
    constructor();
    setDefault(_default: string): StringProperty;
    allowedValues(_enum: Array<string>): StringProperty;
    textEditor(enable: boolean): StringProperty;
    setRequired(required: boolean): StringProperty;
    setTitle(title: string): StringProperty;
    setDescription(description: string): StringProperty;
}
export declare class ArrayItems {
    properties: {
        [name: string]: StringProperty | NumberProperty | BooleanProperty;
    };
    title: string;
    draggable: boolean;
    type: string;
    constructor();
}
export declare class ArrayProperty extends Property {
    items: ArrayItems;
    constructor();
    itemTitle(title: string): ArrayProperty;
    itemsDraggable(draggable: boolean): ArrayProperty;
    addItemProperty(name: string, property: StringProperty | NumberProperty | BooleanProperty): ArrayProperty;
    setTitle(title: string): ArrayProperty;
    setDescription(description: string): ArrayProperty;
}
export declare class Settings {
    properties: {
        [name: string]: ArrayProperty | StringProperty | NumberProperty | BooleanProperty;
    };
    type: string;
    addProperty(name: string, property: ArrayProperty | StringProperty | NumberProperty | BooleanProperty): Settings;
}
