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

  destroy (): void {}
  
  // This method is called in the worker process, so there is no access to Project methods
  onListsChange (lists: Array<List>) {
    this.unimplemented('onListsChange(lists)')
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