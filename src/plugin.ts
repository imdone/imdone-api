import { Project, Task, List } from './project'

import { Settings } from './settings'

export interface CardAction {
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
  
  onBeforeBoardUpdate () {
    this.unimplemented('onBeforeBoardUpdate()')
  }
  
  onBoardUpdate (lists: Array<List>) {
    this.unimplemented('onBoardUpdate(lists: Array<List>)')
  }

  onTaskUpdate (task: Task) {
    this.unimplemented('onTaskUpdate(task: Task)')
  }

  getCardProperties (task: Task): Object {
    this.unimplemented('getCardProperties(task: Task)')
    return {}
  }

  getCardActions (task: Task): Array<CardAction> {
    this.unimplemented('getCardActions(task: Task)')
    return []
  }

  getBoardActions (): Array<BoardAction> {
    this.unimplemented('getBoardActions()')
    return []
  }

  getSettingsSchema (): Settings {
    this.unimplemented('getSettingsSchema()')
    return null
  }

  private getSettings (): any {
    return null
  }

  private unimplemented (signature: string) {
    if (this.unimplWarning[signature]) return
    console.info(`${this.constructor.name}.${signature} is not implemented.`)
    this.unimplWarning[signature] = true
  }
}

declare var module: any;
(module).exports = Plugin