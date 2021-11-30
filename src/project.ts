export interface Task {
  list: string
  filteredListName: string
  line: number
  order: number
  beforeText: string
  content: string
  interpretedContent: string
  active: boolean
  allTags: Array<string>
  allContext: Array<string>
  allMeta: { [key:string]:Array<string> }
  metaKeys: Array<string>,
  totals: { [key:string]:number }
  progress: {
    completed: number,
    total: number
  }
  source: {
    path: string,
    lang: string,
    ext: string
  }
}

export interface Description {
  markdown: string
  html: string
}

export interface List {
  name: string
  filter: string
  tasks: Array<Task>
}

export interface Alert {
  message: string
  type: 'is-white'|'is-black'|'is-light'|'is-dark'|'is-primary'|'is-info'|'is-success'|'is-warning'|'is-danger'
  duration: number
}

export class Project {
  private repo : any
  private eventGateway : any
  private shellGateway : any

  constructor (repo: any, eventGateway: any, shellGateway: any) {
    this.eventGateway = eventGateway
    this.shellGateway = shellGateway
    this.repo = repo
  }

  private getCardDescription (task) {
    return this.repo.description(task, -1)
  }

  get path (): string {
    return this.repo.path
  }

  get lists (): Array<List> {
    return this.repo.defaultViewLists
  }

  get allLists (): Array<List> {
    return this.repo.lists
  }

  get doneList (): string {
    return this.repo.doneList
  }

  get filter (): string {
    return this.repo.filter
  }

  set filter (filter: string) {
    this.repo.setFilter(filter)
  }
  
  getCardProperties (task: Task): Object {
    return this.repo.getCardProperties(task)
  }

  getCardMarkdown (task: Task): string {
    return this.getCardDescription(task).markdown
  }

  getCardHtml (task: Task): string {
    return this.getCardDescription(task).html
  }

  addMetadata (task: Task, key: string, value: string): void {
    if (!/^['"]/.test(value) && /\s/.test(value)) value = `"${value}"`
    const metaData = `${key}${this.repo.config.getMetaSep()}${value}`
    // @ts-expect-error
    const content = task.addToLastCommentInContent(task.content, metaData, this.repo.config.isMetaNewLine())
    this.updateCardContent(task, content)
  }

  addTag (task: Task, tag: string): void {
    const tagContent = `${this.repo.config.getTagPrefix()}${tag}`
    // @ts-expect-error
    const content = task.addToLastCommentInContent(task.content, tagContent, this.repo.config.isMetaNewLine())
    this.updateCardContent(task, content)
  }

  updateCardContent (task: Task, content: string): void {
    this.repo.modifyTaskFromContent(task, content)
  }

  updateInterpretedContent (task: Task, content: string): string {
    task.interpretedContent = content
    return content
  }

  newCard (list: string, path: string): void {
    this.repo.newCard(list, path)
  }

  snackBar ({message, type, duration}: Alert): void {
    this.eventGateway.emit('alert', {msg: message, type: type || 'is-info', duration})
  }

  toast ({message, type, duration}: Alert): void {
    this.eventGateway.emit('toast', {message, type, duration})
  }

  filterLists (lists: Array<List>, filter: string): Array<List> {
    return this.repo.filterLists(filter, lists)
  }

  copyToClipboard (text: string, message: string): void {
    this.shellGateway.copyToClipboard(text, message)
  }

  openUrl (url: string): void {
    this.shellGateway.openUrl(url)
  }

  openPath (path: string): void {
    this.shellGateway.openPath(this.repo.getFullPath(path))
  }
}

