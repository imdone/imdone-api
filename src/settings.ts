export class Property {
  title: string
  description: string
  type: 'boolean'|'number'|'string'|'array'
  
  constructor (type:'boolean'|'number'|'string'|'array') {
    this.type = type
  }

  setTitle (title: string): Property {
    this.title = title
    return this
  }

  setDescription (description: string): Property {
    this.description = description
    return this
  }
}

export class BooleanProperty extends Property {
  default: boolean
  
  constructor () {
    super('boolean')
  }

  setDefault (_default: boolean): BooleanProperty {
    this.default = _default
    return this
  }

  setTitle (title: string): BooleanProperty {
    this.title = title
    return this
  }

  setDescription (description: string): BooleanProperty {
    this.description = description
    return this
  }
}

export class NumberProperty extends Property {
  minimum: number
  maximum: number
  default: number
  
  constructor () {
    super('number')
  }

  setMinimum (min: number): NumberProperty {
    this.minimum = min
    return this
  }

  setMaximum (max: number): NumberProperty {
    this.maximum = max
    return this
  }

  setDefault (_default: number): NumberProperty {
    this.default = _default
    return this
  }

  setTitle (title: string): NumberProperty {
    this.title = title
    return this
  }

  setDescription (description: string): NumberProperty {
    this.description = description
    return this
  }
}

export class StringProperty extends Property {
  default: string
  enum: Array<string>
  editor: boolean = false
  required: boolean = false
  
  constructor () {
    super('string')
  }

  setDefault (_default: string): StringProperty {
    this.default = _default
    return this
  }

  allowedValues (_enum: Array<string>): StringProperty {
    this.enum = _enum
    return this
  }

  textEditor (enable: boolean): StringProperty {
    this.editor = enable
    return this
  }

  setRequired (required: boolean): StringProperty {
    this.required = required
    return this
  }

  setTitle (title: string): StringProperty {
    this.title = title
    return this
  }

  setDescription (description: string): StringProperty {
    this.description = description
    return this
  }
}

export class ArrayItems {
  properties: {[name: string]: StringProperty|NumberProperty|BooleanProperty} = {}
  title: string
  draggable: boolean = false
  type: string = 'object'
  constructor () {
    this.type = 'object'
  }
}

export class ArrayProperty extends Property {
  items: ArrayItems
  
  constructor () {
    super('array')
    this.items = new ArrayItems()
  }

  itemTitle (title: string): ArrayProperty {
    this.items.title = title
    return this
  }

  itemsDraggable (draggable: boolean): ArrayProperty {
    this.items.draggable = draggable
    return this
  }

  addItemProperty (name: string, property: StringProperty|NumberProperty|BooleanProperty): ArrayProperty {
    this.items.properties[name] = property
    return this
  }

  setTitle (title: string): ArrayProperty {
    this.title = title
    return this
  }

  setDescription (description: string): ArrayProperty {
    this.description = description
    return this
  }
}

export class Settings {
  properties: {[name: string]: ArrayProperty|StringProperty|NumberProperty|BooleanProperty} = {}
  type: string = 'object'
  addProperty (name: string, property: ArrayProperty|StringProperty|NumberProperty|BooleanProperty): Settings {
    this.properties[name] = property
    return this
  }
}