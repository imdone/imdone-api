"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    get path() {
        return null;
    }
    get lists() {
        return null;
    }
    get doneList() {
        return null;
    }
    get filter() {
        return null;
    }
    set filter(filter) {
        //
    }
    init(repo) { }
    destroy() { }
    addMetadata(task, key, value) { }
    addTag(task, tag) { }
    updateCardContent(task, content) { }
    newCard(opts) { }
    snackBar(alert) { }
    toast(alert) { }
    filterLists(filter, lists) {
        return null;
    }
    copyToClipboard(text, message) { }
    openUrl(url) { }
    openPath(path) { }
    saveFile(content, path) { }
    setFilter(filter) { }
}
exports.Project = Project;
