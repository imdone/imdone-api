module.exports = class Plugin {
  constructor (project) {
    this.project = project
    this.unimplWarning = {}
  }
  
  onListsChange (lists) {
    this.unimplemented('onListsChange(lists)', {lists})
  }

  onViewListsChange (lists) {
    this.unimplemented('onViewListsChange(lists)', {lists})
  }

  onBeforeRenderCard (el, task) {
    this.unimplemented('onBeforeRenderCard(el, task)', {el, task})
  }

  getCardProperties (task) {
    this.unimplemented('getCardProperties(task)', {task})
    return {}
  }

  getCardLinks (task) {
    this.unimplemented('getCardLinks(task)', {task})
    return []
  }

  getBoardActions () {
    this.unimplemented('getBoardActions()')
    return []
  }

  unimplemented (signature, props) {
    if (this.unimplWarning[signature]) return
    console.warn(`${this.constructor.name}.${signature} is not implemented.`)
    if (props) console.warn(props)
    this.unimplWarning[signature] = true
  }
}