"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = void 0;
class Plugin {
    constructor(project) {
        this.project = project;
        this.unimplWarning = {};
    }
    destroy() { }
    onBeforeBoardUpdate() {
        this.unimplemented('onBeforeBoardUpdate()');
    }
    onBoardUpdate(lists) {
        this.unimplemented('onBoardUpdate(lists: Array<List>)');
    }
    onTaskUpdate(task) {
        this.unimplemented('onTaskUpdate(task: Task)');
    }
    getCardProperties(task) {
        this.unimplemented('getCardProperties(task: Task)');
        return {};
    }
    getCardActions(task) {
        this.unimplemented('getCardActions(task: Task)');
        return [];
    }
    getBoardActions() {
        this.unimplemented('getBoardActions()');
        return [];
    }
    getSettingsSchema() {
        this.unimplemented('getSettingsSchema()');
        return null;
    }
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
