/**
 * Represents a generic property with a title, description, and type.
 */
export class Property {
  title: string
  description: string
  type: 'boolean'|'number'|'string'|'array'
  
  constructor (type:'boolean'|'number'|'string'|'array') {
    this.type = type
  }

  /**
   * Sets the title of the property.
   */
  setTitle (title: string): Property {
    this.title = title
    return this
  }

  /**
   * Sets the description of the property.
   */
  setDescription (description: string): Property {
    this.description = description
    return this
  }
}

/**
 * Represents a boolean property with a default value.
 */
export class BooleanProperty extends Property {
  default: boolean
  
  constructor () {
    super('boolean')
  }

  /**
   * Sets the default value of the boolean property.
   */
  setDefault (_default: boolean): BooleanProperty {
    this.default = _default
    return this
  }
}

/**
 * Represents a numeric property with optional constraints.
 */
export class NumberProperty extends Property {
  minimum: number
  maximum: number
  default: number
  
  constructor () {
    super('number')
  }

  /**
   * Sets the minimum value constraint.
   */
  setMinimum (min: number): NumberProperty {
    this.minimum = min
    return this
  }

  /**
   * Sets the maximum value constraint.
   */
  setMaximum (max: number): NumberProperty {
    this.maximum = max
    return this
  }

  /**
   * Sets the default value.
   */
  setDefault (_default: number): NumberProperty {
    this.default = _default
    return this
  }
}

/**
 * Represents a string property with optional constraints.
 */
export class StringProperty extends Property {
  default: string
  enum: Array<string>
  editor: boolean = false
  required: boolean = false
  
  constructor () {
    super('string')
  }

  /**
   * Sets the default value of the string property.
   */
  setDefault (_default: string): StringProperty {
    this.default = _default
    return this
  }

  /**
   * Defines allowed values for the string property.
   */
  allowedValues (_enum: Array<string>): StringProperty {
    this.enum = _enum
    return this
  }

  /**
   * Enables or disables the text editor for this property.
   */
  textEditor (enable: boolean): StringProperty {
    this.editor = enable
    return this
  }

  /**
   * Marks the string property as required.
   */
  setRequired (required: boolean): StringProperty {
    this.required = required
    return this
  }
}

/**
 * Represents an item in an array property with associated metadata.
 */
export class ArrayItems {
  properties: {[name: string]: StringProperty|NumberProperty|BooleanProperty} = {}
  title: string
  draggable: boolean = false
  type: string = 'object'
  constructor () {
    this.type = 'object'
  }
}

/**
 * Represents an array property with defined item structure.
 */
export class ArrayProperty extends Property {
  items: ArrayItems
  
  constructor () {
    super('array')
    this.items = new ArrayItems()
  }

  /**
   * Sets the title for the items in the array.
   */
  itemTitle (title: string): ArrayProperty {
    this.items.title = title
    return this
  }

  /**
   * Enables or disables draggable items in the array.
   */
  itemsDraggable (draggable: boolean): ArrayProperty {
    this.items.draggable = draggable
    return this
  }

  /**
   * Adds a property to the array items.
   */
  addItemProperty (name: string, property: StringProperty|NumberProperty|BooleanProperty): ArrayProperty {
    this.items.properties[name] = property
    return this
  }
}

/**
 * Represents application settings with configurable properties.
 */
export class Settings {
  properties: {[name: string]: ArrayProperty|StringProperty|NumberProperty|BooleanProperty} = {}
  type: string = 'object'
  
  /**
   * Adds a new property to the settings configuration.
   */
  addProperty (name: string, property: ArrayProperty|StringProperty|NumberProperty|BooleanProperty): Settings {
    this.properties[name] = property
    return this
  }
}
