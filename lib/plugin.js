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
    destroy() { }
    onBeforeAddTask(request) {
        return __awaiter(this, void 0, void 0, function* () {
            this.unimplemented('onBeforeAddTask()');
            const { path, list, content, meta, tags, contexts } = request;
            return { path, content, meta, tags, contexts };
        });
    }
    onBeforeBoardUpdate() {
        this.unimplemented('onBeforeBoardUpdate()');
    }
    onBoardUpdate(lists) {
        this.unimplemented('onBoardUpdate(lists: Array<List>)');
    }
    onTaskUpdate(task) {
        this.unimplemented('onTaskUpdate(task: Task)');
    }
    onAfterDeleteTask(task) {
        this.unimplemented('onAfterDeleteTask(task: Task)');
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
