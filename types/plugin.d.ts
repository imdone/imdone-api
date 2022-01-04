import { Project, Task, List } from './project';
import { Settings } from './settings';
export interface CardAction {
    action: Function;
    pack: 'fas' | 'fab';
    icon: string;
    title: string;
    actions: Array<CardAction>;
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
    getCardActions(task: Task): Array<CardAction>;
    getBoardActions(): Array<BoardAction>;
    getSettingsSchema(): Settings;
    private getSettings;
    private unimplemented;
}
