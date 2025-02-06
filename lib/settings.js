"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.ArrayProperty = exports.ArrayItems = exports.StringProperty = exports.NumberProperty = exports.BooleanProperty = exports.Property = void 0;
/**
 * Represents a generic property with a title, description, and type.
 */
class Property {
    constructor(type) {
        this.type = type;
    }
    /**
     * Sets the title of the property.
     */
    setTitle(title) {
        this.title = title;
        return this;
    }
    /**
     * Sets the description of the property.
     */
    setDescription(description) {
        this.description = description;
        return this;
    }
}
exports.Property = Property;
/**
 * Represents a boolean property with a default value.
 */
class BooleanProperty extends Property {
    constructor() {
        super('boolean');
    }
    /**
     * Sets the default value of the boolean property.
     */
    setDefault(_default) {
        this.default = _default;
        return this;
    }
}
exports.BooleanProperty = BooleanProperty;
/**
 * Represents a numeric property with optional constraints.
 */
class NumberProperty extends Property {
    constructor() {
        super('number');
    }
    /**
     * Sets the minimum value constraint.
     */
    setMinimum(min) {
        this.minimum = min;
        return this;
    }
    /**
     * Sets the maximum value constraint.
     */
    setMaximum(max) {
        this.maximum = max;
        return this;
    }
    /**
     * Sets the default value.
     */
    setDefault(_default) {
        this.default = _default;
        return this;
    }
}
exports.NumberProperty = NumberProperty;
/**
 * Represents a string property with optional constraints.
 */
class StringProperty extends Property {
    constructor() {
        super('string');
        this.editor = false;
        this.required = false;
    }
    /**
     * Sets the default value of the string property.
     */
    setDefault(_default) {
        this.default = _default;
        return this;
    }
    /**
     * Defines allowed values for the string property.
     */
    allowedValues(_enum) {
        this.enum = _enum;
        return this;
    }
    /**
     * Enables or disables the text editor for this property.
     */
    textEditor(enable) {
        this.editor = enable;
        return this;
    }
    /**
     * Marks the string property as required.
     */
    setRequired(required) {
        this.required = required;
        return this;
    }
}
exports.StringProperty = StringProperty;
/**
 * Represents an item in an array property with associated metadata.
 */
class ArrayItems {
    constructor() {
        this.properties = {};
        this.draggable = false;
        this.type = 'object';
        this.type = 'object';
    }
}
exports.ArrayItems = ArrayItems;
/**
 * Represents an array property with defined item structure.
 */
class ArrayProperty extends Property {
    constructor() {
        super('array');
        this.items = new ArrayItems();
    }
    /**
     * Sets the title for the items in the array.
     */
    itemTitle(title) {
        this.items.title = title;
        return this;
    }
    /**
     * Enables or disables draggable items in the array.
     */
    itemsDraggable(draggable) {
        this.items.draggable = draggable;
        return this;
    }
    /**
     * Adds a property to the array items.
     */
    addItemProperty(name, property) {
        this.items.properties[name] = property;
        return this;
    }
}
exports.ArrayProperty = ArrayProperty;
/**
 * Represents application settings with configurable properties.
 */
class Settings {
    constructor() {
        this.properties = {};
        this.type = 'object';
    }
    /**
     * Adds a new property to the settings configuration.
     */
    addProperty(name, property) {
        this.properties[name] = property;
        return this;
    }
}
exports.Settings = Settings;
