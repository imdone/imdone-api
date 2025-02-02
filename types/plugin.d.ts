import { Project, Task, List } from './project';
import { Settings } from './settings';
export interface CardAction {
    action: Function;
    title: string;
    icon: string;
}
export interface BoardAction {
    action: (task?: Task) => void;
    title: string;
    keys?: Array<string>;
    icon?: string;
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
    /**
     * Destroys the plugin instance.
     */
    destroy(): void;
    /**
     * Hook that is called before a task is added.
     * @param {OnBeforeAddTaskRequest} request - The request object containing task details.
     * @returns {Promise<OnBeforeAddTaskResponse>} - The response object containing task details.
     */
    onBeforeAddTask(request: OnBeforeAddTaskRequest): Promise<OnBeforeAddTaskResponse>;
    /**
     * Hook that is called before the board is updated.
     */
    onBeforeBoardUpdate(): void;
    /**
     * Hook that is called when the board is updated.
     * @param {Array<List>} lists - The updated lists.
     */
    onBoardUpdate(lists: Array<List>): Promise<void>;
    /**
     * Hook that is called when a task is updated.
     * @param {Task} task - The updated task.
     */
    onTaskUpdate(task: Task): void;
    /**
     * Hook that is called when a task is found.
     * @param {Task} task - The found task.
     * @returns {Promise<void>}
     */
    onTaskFound(task: Task): Promise<void>;
    /**
     * Hook that is called after a task is deleted.
     * @param {Task} task - The deleted task.
     */
    onAfterDeleteTask(task: Task): void;
    /**
     * Gets the properties of a card.
     * @param {Task} task - The task associated with the card.
     * @returns {Object} - The card properties.
     */
    getCardProperties(task: Task): Object;
    /**
     * Gets the actions available for a card.
     * @param {Task} task - The task associated with the card.
     * @returns {Array<CardAction>} - The card actions.
     */
    getCardActions(task: Task): Array<CardAction>;
    /**
     * Gets the actions available for the board.
     * @returns {Array<BoardAction>} - The board actions.
     */
    getBoardActions(): Array<BoardAction>;
    /**
     * Gets the settings schema.
     * @returns {Settings} - The settings schema.
     */
    getSettingsSchema(): Settings;
    /**
     * Gets the settings.
     * @returns {any} - The settings.
     */
    private getSettings;
    private unimplemented;
}
