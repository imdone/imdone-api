export interface Task {
    list: string;
    filteredListName: string;
    line: number;
    order: number;
    beforeText: string;
    content: string;
    interpretedContent: string;
    active: boolean;
    allTags: Array<string>;
    allContext: Array<string>;
    allMeta: {
        [key: string]: Array<string>;
    };
    metaKeys: Array<string>;
    totals: {
        [key: string]: number;
    };
    progress: {
        completed: number;
        total: number;
    };
    source: {
        path: string;
        lang: string;
        ext: string;
    };
}
export interface Description {
    markdown: string;
    html: string;
}
export interface List {
    name: string;
    filter: string;
    tasks: Array<Task>;
}
export interface Alert {
    message: string;
    type: 'is-white' | 'is-black' | 'is-light' | 'is-dark' | 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    duration: number;
}
export declare class Project {
    private repo;
    private eventGateway;
    private shellGateway;
    constructor(repo: any, eventGateway: any, shellGateway: any);
    private getCardDescription;
    get path(): string;
    get lists(): Array<List>;
    get allLists(): Array<List>;
    get doneList(): string;
    get filter(): string;
    set filter(filter: string);
    addMetadata(task: Task, key: string, value: string): void;
    addTag(task: Task, tag: string): void;
    updateCardContent(task: Task, content: string): void;
    updateInterpretedContent(task: Task, content: string): string;
    newCard(list: string, path: string): void;
    snackBar({ message, type, duration }: Alert): void;
    toast({ message, type, duration }: Alert): void;
    filterLists(lists: Array<List>, filter: string): Array<List>;
    copyToClipboard(text: string, message: string): void;
    openUrl(url: string): void;
    openPath(path: string): void;
}
