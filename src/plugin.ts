import { Project, Task, List } from './project'

import { Settings } from './settings'

export interface CardAction {
  action: Function
  title: string
  pack: 'fas'|'fab'
  icon: string
}

export interface BoardAction {
  action: (task?: Task) => void
  title: string
  keys?: Array<string>
}

export interface Meta {
  key: string
  value: string
}
export interface OnBeforeAddTaskRequest {
  path: string
  list: string
  content: string
  meta: Array<Meta>
  tags: Array<string>
  contexts: Array<string>
  useCardTemplate: boolean
}

export interface OnBeforeAddTaskResponse {
  path: string
  content: string
  meta: Array<Meta>
  tags: Array<string>
  contexts: Array<string>
}

export abstract class Plugin {

  private project: Project
  private unimplWarning: Object

  constructor (project: Project) {
    this.project = project
    this.unimplWarning = {}
  }

  destroy (): void {}
  
  async onBeforeAddTask (request: OnBeforeAddTaskRequest): Promise<OnBeforeAddTaskResponse> {
    this.unimplemented('onBeforeAddTask()')
    const { path, list, content, meta, tags, contexts } = request
    return { path, content, meta, tags, contexts }
  }

  onBeforeBoardUpdate () {
    this.unimplemented('onBeforeBoardUpdate()')
  }
  
  onBoardUpdate (lists: Array<List>) {
    this.unimplemented('onBoardUpdate(lists: Array<List>)')
  }

  onTaskUpdate (task: Task) {
    this.unimplemented('onTaskUpdate(task: Task)')
  }

  onAfterDeleteTask (task: Task) {
    this.unimplemented('onAfterDeleteTask(task: Task)')
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