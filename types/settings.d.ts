export declare class Property {
    title: string;
    description: string;
    type: 'boolean' | 'number' | 'string' | 'array' | 'object';
    constructor(title: string, description: string, type: 'boolean' | 'number' | 'string' | 'array' | 'object');
}
export declare class BooleanProperty extends Property {
    default: boolean;
    constructor(title: string, description: string);
}
export declare class NumberProperty extends Property {
    minimum: number;
    maximum: number;
    default: number;
    constructor(title: string, description: string);
}
export declare class StringProperty extends Property {
    default: string;
    enum: Array<string>;
    editor: false;
    required: false;
    constructor(title: string, description: string);
}
export declare class ObjectProperty extends Property {
    properties: {
        [name: string]: Property;
    };
    constructor(title: string, properties: {
        [name: string]: Property;
    });
}
export declare class ArrayItems {
    properties: {
        [name: string]: ObjectProperty | StringProperty;
    };
    title: string;
    draggable: boolean;
    type: 'object';
    constructor(title: string, properties: {
        [name: string]: ObjectProperty | StringProperty;
    });
}
export declare class ArrayProperty extends Property {
    items: ArrayItems;
    constructor(title: string, description: string, items: ArrayItems);
}
export declare class Settings {
    properties: {
        [name: string]: ArrayProperty | StringProperty | NumberProperty | BooleanProperty;
    };
    constructor(properties: {
        [name: string]: ArrayProperty | StringProperty | NumberProperty | BooleanProperty;
    });
}
