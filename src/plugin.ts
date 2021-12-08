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
  
  // This method is called in the worker process, so there is no access to Project methods
  onListsChange (lists: Array<List>) {
    this.unimplemented('onListsChange(lists)')
  }

  // This method is called in the render process, so do not update tasks 
  onViewListsChange (lists: Array<List>) {
    this.unimplemented('onViewListsChange(lists)')
  }

  onBeforeRenderCard (el: HTMLElement, task: Task) {
    this.unimplemented('onBeforeRenderCard(el, task)')
  }

  getCardProperties (task: Task): Object {
    this.unimplemented('getCardProperties(task)')
    return {}
  }

  getCardLinks (task: Task): Array<CardLink> {
    this.unimplemented('getCardLinks(task)')
    return []
  }

  getBoardActions (): Array<BoardAction> {
    this.unimplemented('getBoardActions()')
    return []
  }

  protected unimplemented (signature: string) {
    if (this.unimplWarning[signature]) return
    console.info(`${this.constructor.name}.${signature} is not implemented.`)
    this.unimplWarning[signature] = true
  }
}

declare var module: any;
(module).exports = Plugin