"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.ArrayProperty = exports.ArrayItems = exports.ObjectProperty = exports.StringProperty = exports.NumberProperty = exports.BooleanProperty = exports.Property = void 0;
class Property {
    constructor(title, description, type) {
        this.title = title;
        this.description = description;
        this.type = type;
    }
}
exports.Property = Property;
class BooleanProperty extends Property {
    constructor(title, description) {
        super(title, description, 'boolean');
    }
}
exports.BooleanProperty = BooleanProperty;
class NumberProperty extends Property {
    constructor(title, description) {
        super(title, description, 'number');
    }
}
exports.NumberProperty = NumberProperty;
class StringProperty extends Property {
    constructor(title, description) {
        super(title, description, 'string');
    }
}
exports.StringProperty = StringProperty;
class ObjectProperty extends Property {
    constructor(title, properties) {
        super(title, '', 'object');
        this.properties = properties;
    }
}
exports.ObjectProperty = ObjectProperty;
class ArrayItems {
    constructor(title, properties) {
        this.title = title;
        this.properties = properties;
        this.type = 'object';
        this.draggable = false;
    }
}
exports.ArrayItems = ArrayItems;
class ArrayProperty extends Property {
    constructor(title, description, items) {
        super(title, description, 'array');
        this.items = items;
    }
}
exports.ArrayProperty = ArrayProperty;
class Settings {
    constructor(properties) {
        this.properties = properties;
    }
}
exports.Settings = Settings;
