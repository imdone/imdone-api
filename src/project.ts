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

export interface List {
  name: string
  filter: string
  tasks: Array<Task>
}

export interface Alert {
  message: string
  type?: 'is-white'|'is-black'|'is-light'|'is-dark'|'is-primary'|'is-info'|'is-success'|'is-warning'|'is-danger'
  duration?: number // default: 5000
}

// DOING: ## Move the implementation to imdone-core project
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

  set filter (filter: string) {
    //
  }

  init (repo: any): void {}

  destroy (): void {}
  
  addMetadata (task: Task, key: string, value: string): void {}

  addTag (task: Task, tag: string): void {}

  updateCardContent (task: Task, content: string): void {}

  newCard (list: string, path: string): void {}

  snackBar (alert: Alert): void {}

  toast (alert: Alert): void {}

  filterLists (filter: string, lists: Array<List>): Array<List> {
    return null
  }

  copyToClipboard (text: string, message: string): void {}

  openUrl (url: string): void {}

  openPath (path: string): void {}

  saveFile (content: string, path: string): void {}

  setFilter (filter: string): void {}
}

