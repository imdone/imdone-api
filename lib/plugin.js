"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = void 0;
class Plugin {
    constructor(project) {
        this.project = project;
        this.unimplWarning = {};
    }
    destroy() { }
    // This method is called in the worker process, so there is no access to Project methods
    onListsChange(lists) {
        this.unimplemented('onListsChange(lists)');
    }
    getCardProperties(task) {
        this.unimplemented('getCardProperties(task)');
        return {};
    }
    getCardLinks(task) {
        this.unimplemented('getCardLinks(task)');
        return [];
    }
    getBoardActions() {
        this.unimplemented('getBoardActions()');
        return [];
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
