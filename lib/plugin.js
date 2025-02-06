"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = void 0;
class Plugin {
    constructor(project) {
        this.project = project;
        this.unimplWarning = {};
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.unimplemented('init()');
        });
    }
    /**
     * Destroys the plugin instance.
     */
    destroy() { }
    /**
     * Hook that is called before a task is added.
     * @param {OnBeforeAddTaskRequest} request - The request object containing task details.
     * @returns {Promise<OnBeforeAddTaskResponse>} - The response object containing task details.
     */
    onBeforeAddTask(request) {
        return __awaiter(this, void 0, void 0, function* () {
            this.unimplemented('onBeforeAddTask()');
            const { path, list, content, meta, tags, contexts } = request;
            return { path, content, meta, tags, contexts };
        });
    }
    /**
     * Hook that is called before the board is updated.
     */
    onBeforeBoardUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.unimplemented('onBeforeBoardUpdate()');
        });
    }
    /**
     * Hook that is called when the board is updated.
     * @param {Array<List>} lists - The updated lists.
     */
    onBoardUpdate(lists) {
        return __awaiter(this, void 0, void 0, function* () {
            this.unimplemented('onBoardUpdate(lists: Array<List>)');
        });
    }
    /**
     * Hook that is called when a task is updated.
     * @param {Task} task - The updated task.
     */
    onTaskUpdate(task) {
        this.unimplemented('onTaskUpdate(task: Task)');
    }
    /**
     * Hook that is called when a task is found.
     * @param {Task} task - The found task.
     * @returns {Promise<void>}
     */
    onTaskFound(task) {
        return __awaiter(this, void 0, void 0, function* () {
            this.unimplemented('onTaskFound(task: Task)');
        });
    }
    /**
     * Hook that is called after a task is deleted.
     * @param {Task} task - The deleted task.
     */
    onAfterDeleteTask(task) {
        this.unimplemented('onAfterDeleteTask(task: Task)');
    }
    /**
     * Gets the properties of a card.
     * @param {Task} task - The task associated with the card.
     * @returns {Object} - The card properties.
     */
    getCardProperties(task) {
        this.unimplemented('getCardProperties(task: Task)');
        return {};
    }
    /**
     * Gets the properties of the board.
     * @returns {Object} - The board properties.
     */
    getBoardProperties() {
        this.unimplemented('getBoardProperties()');
        return {};
    }
    /**
     * Gets the actions available for a card.
     * @param {Task} task - The task associated with the card.
     * @returns {Array<CardAction>} - The card actions.
     */
    getCardActions(task) {
        this.unimplemented('getCardActions(task: Task)');
        return [];
    }
    /**
     * Gets the actions available for the board.
     * @returns {Array<BoardAction>} - The board actions.
     */
    getBoardActions() {
        this.unimplemented('getBoardActions()');
        return [];
    }
    /**
     * Gets the settings schema.
     * @returns {Settings} - The settings schema.
     */
    getSettingsSchema() {
        this.unimplemented('getSettingsSchema()');
        return null;
    }
    /**
     * Gets the settings.
     * @returns {any} - The settings.
     */
    getSettings() {
        return null;
    }
    unimplemented(signature) {
        if (this.unimplWarning[signature])
            return;
        console.info(`${this.constructor.name}.${signature} is not implemented.`);
        this.unimplWarning[signature] = true;
    }
}
exports.Plugin = Plugin;
(module).exports = Plugin;
