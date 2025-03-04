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
  /**
   * Represents the state of the task.
   */
  active: boolean

  /**
   * All context strings associated with the task.
   */
  allContext: Array<string>

  /**
   * All metadata associated with the task, where each key maps to an array of strings.
   */
  allMeta: { [key: string]: Array<string> }

  /**
   * All tags associated with the task.
   */
  allTags: Array<string>

  /**
   * Text before the main content.
   */
  beforeText: string

  /**
   * Main content of the task.
   */
  content: string

  /**
   * Context strings associated with the task.
   */
  context: Array<string>

  /**
   * Creation timestamp of the task.
   */
  created: string

  /**
   * Creation date of the task as a Date object.
   */
  createdDate: Date

  /**
   * Data associated with the task. This is added by plugins and extensions, through properties.
   */
  data: object

  /**
   * Indicates whether the task is expanded in the UI.
   */
  expand: boolean

  /**
   * Front matter of the file the task is in.
   */
  frontMatter: object

  /**
   * Name of the filtered list if the task is in a filteredList.
   */
  filteredListName: string

  /**
   * Interpreted content of the task, after processing.
   */
  interpretedContent: string

  /**
   * The last line number of this task in it's file.
   */
  lastLine: number

  /**
   * The line number of this task in it's file.
   */
  line: number

  /**
   * The list to which the current item belongs.
   */
  list: string

  /**
   * Metadata associated with the current item, where each key maps to an array of strings.
   */
  meta: { [key: string]: Array<string> }

  /**
   * Keys of the metadata associated with the current item.
   */
  metaKeys: Array<string>

  /**
   * Order of the current item within its list.
   */
  order: number

  /**
   * Progress information for the task.
   */
  progress: {
    /**
     * Number of completed items.
     */
    completed: number

    /**
     * Total number of items.
     */
    total: number
  }

  /**
   * Source information for the task.
   */
  source: {
    /**
     * Creation time of the source file.
     */
    createdTime: string

    /**
     * Path to the source file.
     */
    path: string

    /**
     * Language of the source file.
     */
    lang: string

    /**
     * Extension of the source file.
     */
    ext: string

    /**
     * Last modified time of the source file.
     */
    modifiedTime: string
  }

  /**
   * Tags associated with the current item.
   */
  tags: Array<string>

  /**
   * Type of Task.
   */
  type: 'CODE' | 'HASHTAG' | 'MARKDOWN'
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
