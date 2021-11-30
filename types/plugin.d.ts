import { Task, List } from "./project";
export interface CardLink {
    action: Function;
    pack: 'fas' | 'fab';
    icon: string;
    title: string;
}
export interface BoardAction {
    action: Function;
    name: string;
}
export declare abstract class Plugin {
    private project;
    private unimplWarning;
    constructor(project: any);
    onListsChange(lists: Array<List>): void;
    onViewListsChange(lists: Array<List>): void;
    onBeforeRenderCard(el: HTMLElement, task: Task): void;
    getCardProperties(task: Task): Object;
    getCardLinks(task: Task): Array<CardLink>;
    getBoardActions(): Array<BoardAction>;
    unimplemented(signature: string, props: Object): void;
}
