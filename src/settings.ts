export class Property {
  title: string
  description: string
  type: 'boolean'|'number'|'string'|'array'|'object'
  constructor (title: string, description: string, type:'boolean'|'number'|'string'|'array'|'object' ) {
    this.title = title
    this.description = description
    this.type = type
  }
}

export class BooleanProperty extends Property {
  default: boolean
  constructor (title: string, description: string) {
    super(title, description, 'boolean')
  }
}

export class NumberProperty extends Property {
  minimum: number
  maximum: number
  default: number
  constructor (title: string, description: string) {
    super(title, description, 'number')
  }
}

export class StringProperty extends Property {
  default: string
  enum: Array<string>
  editor: false
  required: false
  constructor (title: string, description: string) {
    super(title, description, 'string')
  }
}

export class ObjectProperty extends Property {
  properties: {[name: string]: Property}
  constructor (title: string, properties: {[name: string]: Property}) {
    super(title, '', 'object')
    this.properties = properties
  }
}

export class ArrayItems {
  properties: {[name: string]: ObjectProperty|StringProperty}
  title: string
  draggable: boolean
  type: 'object'
  constructor (title: string, properties: {[name: string]: ObjectProperty|StringProperty}) {
    this.title = title
    this.properties = properties
    this.type = 'object'
    this.draggable = false
    }
}

export class ArrayProperty extends Property {
  items: ArrayItems
  constructor (title: string, description: string, items: ArrayItems) {
    super(title, description, 'array')
    this.items = items
  }
}

export class Settings {
  properties: {[name: string]: ArrayProperty|StringProperty|NumberProperty|BooleanProperty}
  constructor (properties: {[name: string]: ArrayProperty|StringProperty|NumberProperty|BooleanProperty}) {
    this.properties = properties
  }
}