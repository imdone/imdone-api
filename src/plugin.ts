import { Project, Task, List } from "./project"

export interface CardLink {
  action: Function
  pack: 'fas'|'fab'
  icon: string
  title: string
}

export interface BoardAction {
  action: Function
  name: string
}

export abstract class Plugin {

  private project: Project
  private unimplWarning: Object

  constructor (project: Project) {
    this.project = project
    this.unimplWarning = {}
  }
  
  onListsChange (lists: Array<List>) {
    this.unimplemented('onListsChange(lists)', {lists})
  }

  onViewListsChange (lists: Array<List>) {
    this.unimplemented('onViewListsChange(lists)', {lists})
  }

  onBeforeRenderCard (el: HTMLElement, task: Task) {
    this.unimplemented('onBeforeRenderCard(el, task)', {el, task})
  }

  getCardProperties (task: Task): Object {
    this.unimplemented('getCardProperties(task)', {task})
    return {}
  }

  getCardLinks (task: Task): Array<CardLink> {
    this.unimplemented('getCardLinks(task)', {task})
    return []
  }

  getBoardActions (): Array<BoardAction> {
    this.unimplemented('getBoardActions()', null)
    return []
  }

  unimplemented (signature: string, props: Object) {
    if (this.unimplWarning[signature]) return
    console.info(`${this.constructor.name}.${signature} is not implemented.`)
    if (props) console.info(props)
    this.unimplWarning[signature] = true
  }
}

declare var module: any;
(module).exports = Plugin