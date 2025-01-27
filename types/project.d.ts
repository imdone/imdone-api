export interface Meta {
    key: string;
    value: string;
}
export interface Task {
    active: boolean;
    allContext: Array<string>;
    allMeta: {
        [key: string]: Array<string>;
    };
    allTags: Array<string>;
    beforeText: string;
    content: string;
    context: Array<string>;
    created: string;
    createdDate: Date;
    data: object;
    expand: boolean;
    frontMatter: object;
    filteredListName: string;
    interpretedContent: string;
    lastLine: number;
    line: number;
    list: string;
    meta: {
        [key: string]: Array<string>;
    };
    metaKeys: Array<string>;
    order: number;
    progress: {
        completed: number;
        total: number;
    };
    source: {
        createdTime: string;
        path: string;
        lang: string;
        ext: string;
        modifiedTime: string;
    };
    tags: Array<string>;
    totals: {
        [key: string]: number;
    };
    type: 'CODE' | 'HASHTAG' | 'HASH_META_ORDER' | 'MARKDOWN';
}
export interface List {
    name: string;
    filter: string;
    tasks: Array<Task>;
}
export interface NewCardOpts {
    list: string;
    path: string;
    template: string;
}
export interface AddCardToFileOpts {
    path: string;
    content: string;
    list?: string;
    tags?: Array<string>;
    contexts?: Array<string>;
    meta?: Array<Meta>;
    useCardTemplate?: boolean;
}
export interface AddCardToFileResponse {
    task: Task;
}
export interface Alert {
    message: string;
    type?: 'is-white' | 'is-black' | 'is-light' | 'is-dark' | 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    duration?: number;
}
export declare class Project {
    get path(): string;
    get lists(): Array<List>;
    get doneList(): string;
    get filter(): string;
    get filteredCards(): Array<Task>;
    get updatedAt(): Date;
    set filter(filter: string);
    init(repo: any): void;
    destroy(): void;
    getAllCards(filter?: string): Array<Task>;
    renderMarkdown(content: string): string;
    newCard(opts: NewCardOpts): void;
    addCardToFile(opts: AddCardToFileOpts): Promise<AddCardToFileResponse>;
    filterLists(filter: string, lists: Array<List>): Array<List>;
    saveFile(content: string, path: string): void;
    setFilter(filter: string): void;
    addMetaToContent(meta: Array<Meta>, content: string): string;
    addTagsToContent(tags: Array<string>, content: string): string;
    addContextToContent(contexts: Array<string>, content: string): string;
    updateCardContent(task: Task, content: string): Promise<void>;
    addMetadata(task: Task, key: string, value: string): Promise<void>;
    removeMetadata(task: Task, key: string, value: string): Promise<void>;
    addTag(task: Task, tag: string): Promise<void>;
    removeTag(task: Task, tag: string): Promise<void>;
    snackBar(alert: Alert): Promise<void>;
    toast(alert: Alert): Promise<void>;
    copyToClipboard(text: string, message: string): Promise<void>;
    openUrl(url: string): Promise<void>;
    openPath(path: string): Promise<void>;
}
