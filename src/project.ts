/**
 * Represents metadata with a key-value pair.
 */
export interface Meta {
  key: string
  value: string
}

/**
 * Represents a task with various properties.
 */
export interface Task {
  active: boolean
  allContext: Array<string>
  allMeta: { [key: string]: Array<string> }
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
  meta: { [key: string]: Array<string> }
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
  totals: { [key: string]: number }
  type: 'CODE' | 'HASHTAG' | 'HASH_META_ORDER' | 'MARKDOWN'
}

/**
 * Represents a list with a name and filter.
 */
export interface List {
  name: string
  filter: string
  tasks: Array<Task>
}

/**
 * Options for creating a new card.
 */
export interface NewCardOpts {
  list: string
  path: string
  template: string
}

/**
 * Options for adding a card to a file.
 */
export interface AddCardToFileOpts {
  path: string
  content: string
  list?: string
  tags?: Array<string>
  contexts?: Array<string>
  meta?: Array<Meta>
  useCardTemplate?: boolean
}

/**
 * Response for adding a card to a file.
 */
export interface AddCardToFileResponse {
  task: Task
}

/**
 * Represents an alert message with optional type and duration.
 */
export interface Alert {
  message: string
  type?: 'is-white'|'is-black'|'is-light'|'is-dark'|'is-primary'|'is-info'|'is-success'|'is-warning'|'is-danger'
  duration?: number // default: 5000
}

/**
 * Represents a project with lists, tasks, and various actions.
 */
export class Project {
  /**
   * Gets the project path.
   */
  get path (): string {
    return
  }

  /**
   * Gets all lists in the project.
   */
  get lists (): Array<List> {
    return
  }

  /**
   * Gets the name of the done list.
   */
  get doneList (): string {
    return
  }

  /**
   * Gets the current filter applied to the project.
   */
  get filter (): string {
    return
  }

  /**
   * Gets the filtered tasks based on the current filter.
   */
  get filteredCards (): Array<Task> {
    return
  }

  /**
   * Gets the last updated timestamp.
   */
  get updatedAt (): Date {
    return
  }

  /**
   * Sets the filter for task retrieval.
   */
  set filter (filter: string) {
    //
  }

  /**
   * Initializes the project with a given repository.
   */
  init (repo: any): void {}

  /**
   * Destroys the project instance.
   */
  destroy (): void {}

  /**
   * Retrieves all cards, optionally filtered.
   */
  getAllCards (filter?: string): Array<Task> {
    return
  }

  /**
   * Renders Markdown content as HTML.
   */
  renderMarkdown (content: string): string {
    return
  }
  
  /**
   * Creates a new card in the project.
   */
  newCard (opts: NewCardOpts): void {}

  /**
   * Adds a card to a file and returns the created task.
   */
  async addCardToFile(opts: AddCardToFileOpts): Promise<AddCardToFileResponse> {
    return
  }

  /**
   * Filters lists based on a provided filter.
   */
  filterLists (filter: string, lists: Array<List>): Array<List> {
    return
  }

  /**
   * Saves content to a specified file path.
   */
  saveFile (content: string, path: string): void {}

  /**
   * Sets the current filter for the project.
   */
  setFilter (filter: string): void {}

  /**
   * Adds metadata to the provided content.
   */
  addMetaToContent(meta: Array<Meta>, content: string): string {
    return
  }

  /**
   * Adds tags to the provided content.
   */
  addTagsToContent(tags: Array<string>, content: string ): string {
    return
  }

  /**
   * Adds context to the provided content.
   */
  addContextToContent(contexts: Array<string>, content: string): string {
    return
  }

  /**
   * Updates the content of a given task.
   */
  async updateCardContent (task: Task, content: string): Promise<void> {}

  /**
   * Adds metadata to a task.
   */
  async addMetadata (task: Task, key: string, value: string): Promise<void> {}

  /**
   * Removes metadata from a task.
   */
  async removeMetadata (task: Task, key: string, value: string): Promise<void> {}

  /**
   * Adds a tag to a task.
   */
  async addTag (task: Task, tag: string): Promise<void> {}

  /**
   * Removes a tag from a task.
   */
  async removeTag (task: Task, tag: string): Promise<void> {}

  /**
   * Displays a snackbar notification.
   */
  async snackBar (alert: Alert): Promise<void> {}

  /**
   * Displays a toast notification.
   */
  async toast (alert: Alert): Promise<void> {}

  /**
   * Copies text to the clipboard and shows a message.
   */
  async copyToClipboard (text: string, message: string): Promise<void> {}

  /**
   * Opens a URL in the default browser.
   */
  async openUrl (url: string): Promise<void> {}

  /**
   * Open the given file in the desktop's default manner.
   */
  async openPath (filePath: string): Promise<void> {}
}
