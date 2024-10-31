import { Project, Task, List } from './project';
import { Settings } from './settings';
export interface CardAction {
    action: Function;
    title: string;
    pack: 'fas' | 'fab';
    icon: string;
}
export interface BoardAction {
    action: (task?: Task) => void;
    title: string;
    keys?: Array<string>;
}
export interface Meta {
    key: string;
    value: string;
}
export interface OnBeforeAddTaskRequest {
    path: string;
    list: string;
    content: string;
    meta: Array<Meta>;
    tags: Array<string>;
    contexts: Array<string>;
    useCardTemplate: boolean;
}
export interface OnBeforeAddTaskResponse {
    path: string;
    content: string;
    meta: Array<Meta>;
    tags: Array<string>;
    contexts: Array<string>;
}
export declare abstract class Plugin {
    private project;
    private unimplWarning;
    constructor(project: Project);
    init(): Promise<void>;
    destroy(): void;
    onBeforeAddTask(request: OnBeforeAddTaskRequest): Promise<OnBeforeAddTaskResponse>;
    onBeforeBoardUpdate(): void;
    onBoardUpdate(lists: Array<List>): void;
    onTaskUpdate(task: Task): void;
    onTaskFound(task: Task): Promise<void>;
    onAfterDeleteTask(task: Task): void;
    getCardProperties(task: Task): Object;
    getCardActions(task: Task): Array<CardAction>;
    getBoardActions(): Array<BoardAction>;
    getSettingsSchema(): Settings;
    private getSettings;
    private unimplemented;
}
