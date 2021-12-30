import { Project, Task, List } from "./project";
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
    constructor(project: Project);
    destroy(): void;
    onBeforeBoardUpdate(): void;
    onBoardUpdate(lists: Array<List>): void;
    onTaskUpdate(task: Task): void;
    getCardProperties(task: Task): Object;
    getCardLinks(task: Task): Array<CardLink>;
    getBoardActions(): Array<BoardAction>;
    protected unimplemented(signature: string): void;
}
