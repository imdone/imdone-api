"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = void 0;
class Plugin {
    constructor(project) {
        this.project = project;
        this.unimplWarning = {};
    }
    // This method is called in the worker process, so there is no access to Project methods
    onListsChange(lists) {
        this.unimplemented('onListsChange(lists)');
    }
    // This method is called in the render process, so do not update tasks 
    onViewListsChange(lists) {
        this.unimplemented('onViewListsChange(lists)');
    }
    onBeforeRenderCard(el, task) {
        this.unimplemented('onBeforeRenderCard(el, task)');
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
