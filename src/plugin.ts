import { Project, Task, List } from './project'

import { Settings } from './settings'

export interface CardAction {
  action: Function
  title: string
  icon: string
}

export interface BoardAction {
  action: (task?: Task) => void
  title: string
  keys?: Array<string>
  icon?: string
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

  async init (): Promise<void> {
    this.unimplemented('init()')
  }
  
  /**
   * Destroys the plugin instance.
   */
  destroy (): void {}

  /**
   * Hook that is called before a task is added.
   * @param {OnBeforeAddTaskRequest} request - The request object containing task details.
   * @returns {Promise<OnBeforeAddTaskResponse>} - The response object containing task details.
   */
  async onBeforeAddTask (request: OnBeforeAddTaskRequest): Promise<OnBeforeAddTaskResponse> {
    this.unimplemented('onBeforeAddTask()')
    const { path, list, content, meta, tags, contexts } = request
    return { path, content, meta, tags, contexts }
  }

  /**
   * Hook that is called before the board is updated.
   */
  async onBeforeBoardUpdate () {
    this.unimplemented('onBeforeBoardUpdate()')
  }
  
  /**
   * Hook that is called when the board is updated.
   * @param {Array<List>} lists - The updated lists.
   */
  async onBoardUpdate (lists: Array<List>) {
    this.unimplemented('onBoardUpdate(lists: Array<List>)')
  }

  /**
   * Hook that is called when a task is updated.
   * @param {Task} task - The updated task.
   */
  onTaskUpdate (task: Task) {
    this.unimplemented('onTaskUpdate(task: Task)')
  }

  /**
   * Hook that is called when a task is found.
   * @param {Task} task - The found task.
   * @returns {Promise<void>}
   */
  async onTaskFound(task: Task): Promise<void> {
    this.unimplemented('onTaskFound(task: Task)')
  }

  /**
   * Hook that is called after a task is deleted.
   * @param {Task} task - The deleted task.
   */
  onAfterDeleteTask (task: Task) {
    this.unimplemented('onAfterDeleteTask(task: Task)')
  }

  /**
   * Gets the properties of a card.
   * @param {Task} task - The task associated with the card.
   * @returns {Object} - The card properties.
   */
  getCardProperties (task: Task): Object {
    this.unimplemented('getCardProperties(task: Task)')
    return {}
  }

  /**
   * Gets the properties of the board.
   * @returns {Object} - The board properties.
   */
  getBoardProperties (): Object {
    this.unimplemented('getBoardProperties()')
    return {}
  }

  /**
   * Gets the actions available for a card.
   * @param {Task} task - The task associated with the card.
   * @returns {Array<CardAction>} - The card actions.
   */
  getCardActions (task: Task): Array<CardAction> {
    this.unimplemented('getCardActions(task: Task)')
    return []
  }

  /**
   * Gets the actions available for the board.
   * @returns {Array<BoardAction>} - The board actions.
   */
  getBoardActions (): Array<BoardAction> {
    this.unimplemented('getBoardActions()')
    return []
  }

  /**
   * Gets the settings schema.
   * @returns {Settings} - The settings schema.
   */
  getSettingsSchema (): Settings {
    this.unimplemented('getSettingsSchema()')
    return null
  }

  /**
   * Gets the settings.
   * @returns {any} - The settings.
   */
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