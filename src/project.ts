export interface Task {
  active: boolean
  allContext: Array<string>
  allMeta: { [key:string]:Array<string> }
  allTags: Array<string>
  beforeText: string
  content: string
  context: Array<string>
  created: string
  createdDate: Date
  data: object
  expand: boolean
  frontMatter: object
  filteredListName: string
  interpretedContent: string
  lastLine: number
  line: number
  list: string
  meta: { [key:string]:Array<string> }
  metaKeys: Array<string>
  order: number
  progress: {
    completed: number
    total: number
  }
  source: {
    createdTime: string
    path: string
    lang: string
    ext: string
    modifiedTime: string
  }
  tags: Array<string>
  totals: { [key:string]:number }
  type: 'CODE'|'HASHTAG'|'HASH_META_ORDER'|'MARKDOWN'
}

export interface List {
  name: string
  filter: string
  tasks: Array<Task>
}

export interface NewCardOpts {
  list: string
  path: string
  template: string
}

export interface AddCardToFileOpts {
  path: string
  content: string
  list?: string
  tags?: Array<string>
  contexts?: Array<string>
  meta?: Array<string>
  useCardTemplate?: boolean
}

export interface AddCardToFileResponse {
  task: Task
}

export interface Alert {
  message: string
  type?: 'is-white'|'is-black'|'is-light'|'is-dark'|'is-primary'|'is-info'|'is-success'|'is-warning'|'is-danger'
  duration?: number // default: 5000
}

export class Project {
  get path (): string {
    return null
  }

  get lists (): Array<List> {
    return null
  }

  get doneList (): string {
    return null
  }

  get filter (): string {
    return null
  }

  get filteredCards (): Array<Task> {
    return null
  }

  set filter (filter: string) {
    //
  }

  init (repo: any): void {}

  destroy (): void {}
  
  newCard (opts: NewCardOpts): void {}

  async addCardToFile(opts: AddCardToFileOpts): Promise<AddCardToFileResponse> {
    return null
  }

  filterLists (filter: string, lists: Array<List>): Array<List> {
    return null
  }

  saveFile (content: string, path: string): void {}

  setFilter (filter: string): void {}

  async updateCardContent (task: Task, content: string): Promise<void> {}

  async addMetadata (task: Task, key: string, value: string): Promise<void> {}

  async removeMetadata (task: Task, key: string, value: string): Promise<void> {}

  async addTag (task: Task, tag: string): Promise<void> {}

  async removeTag (task: Task, tag: string): Promise<void> {}

  async snackBar (alert: Alert): Promise<void> {}

  async toast (alert: Alert): Promise<void> {}

  async copyToClipboard (text: string, message: string): Promise<void> {}

  async openUrl (url: string): Promise<void> {}

  async openPath (path: string): Promise<void> {}
}

