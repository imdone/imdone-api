"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.ArrayProperty = exports.ArrayItems = exports.StringProperty = exports.NumberProperty = exports.BooleanProperty = exports.Property = void 0;
class Property {
    constructor(type) {
        this.type = type;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
}
exports.Property = Property;
class BooleanProperty extends Property {
    constructor() {
        super('boolean');
    }
    setDefault(_default) {
        this.default = _default;
        return this;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
}
exports.BooleanProperty = BooleanProperty;
class NumberProperty extends Property {
    constructor() {
        super('number');
    }
    setMinimum(min) {
        this.minimum = min;
        return this;
    }
    setMaximum(max) {
        this.maximum = max;
        return this;
    }
    setDefault(_default) {
        this.default = _default;
        return this;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
}
exports.NumberProperty = NumberProperty;
class StringProperty extends Property {
    constructor() {
        super('string');
        this.editor = false;
        this.required = false;
    }
    setDefault(_default) {
        this.default = _default;
        return this;
    }
    allowedValues(_enum) {
        this.enum = _enum;
        return this;
    }
    textEditor(enable) {
        this.editor = enable;
        return this;
    }
    setRequired(required) {
        this.required = required;
        return this;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
}
exports.StringProperty = StringProperty;
class ArrayItems {
    constructor() {
        this.properties = {};
        this.draggable = false;
        this.type = 'object';
        this.type = 'object';
    }
}
exports.ArrayItems = ArrayItems;
class ArrayProperty extends Property {
    constructor() {
        super('array');
        this.items = new ArrayItems();
    }
    itemTitle(title) {
        this.items.title = title;
        return this;
    }
    itemsDraggable(draggable) {
        this.items.draggable = draggable;
        return this;
    }
    addItemProperty(name, property) {
        this.items.properties[name] = property;
        return this;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
}
exports.ArrayProperty = ArrayProperty;
class Settings {
    constructor() {
        this.properties = {};
        this.type = 'object';
    }
    addProperty(name, property) {
        this.properties[name] = property;
        return this;
    }
}
exports.Settings = Settings;
