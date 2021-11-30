"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    constructor(repo, eventGateway, shellGateway) {
        this.eventGateway = eventGateway;
        this.shellGateway = shellGateway;
        this.repo = repo;
    }
    getCardDescription(task) {
        return this.repo.description(task, -1);
    }
    get path() {
        return this.repo.path;
    }
    get lists() {
        return this.repo.defaultViewLists;
    }
    get allLists() {
        return this.repo.lists;
    }
    get doneList() {
        return this.repo.doneList;
    }
    get filter() {
        return this.repo.filter;
    }
    set filter(filter) {
        this.repo.setFilter(filter);
    }
    getCardProperties(task) {
        return this.repo.getCardProperties(task);
    }
    getCardMarkdown(task) {
        return this.getCardDescription(task).markdown;
    }
    getCardHtml(task) {
        return this.getCardDescription(task).html;
    }
    addMetadata(task, key, value) {
        if (!/^['"]/.test(value) && /\s/.test(value))
            value = `"${value}"`;
        const metaData = `${key}${this.repo.config.getMetaSep()}${value}`;
        // @ts-expect-error
        const content = task.addToLastCommentInContent(task.content, metaData, this.repo.config.isMetaNewLine());
        this.updateCardContent(task, content);
    }
    addTag(task, tag) {
        const tagContent = `${this.repo.config.getTagPrefix()}${tag}`;
        // @ts-expect-error
        const content = task.addToLastCommentInContent(task.content, tagContent, this.repo.config.isMetaNewLine());
        this.updateCardContent(task, content);
    }
    updateCardContent(task, content) {
        this.repo.modifyTaskFromContent(task, content);
    }
    updateInterpretedContent(task, content) {
        task.interpretedContent = content;
        return content;
    }
    newCard(list, path) {
        this.repo.newCard(list, path);
    }
    snackBar({ message, type, duration }) {
        this.eventGateway.emit('alert', { msg: message, type: type || 'is-info', duration });
    }
    toast({ message, type, duration }) {
        this.eventGateway.emit('toast', { message, type, duration });
    }
    filterLists(lists, filter) {
        return this.repo.filterLists(filter, lists);
    }
    copyToClipboard(text, message) {
        this.shellGateway.copyToClipboard(text, message);
    }
    openUrl(url) {
        this.shellGateway.openUrl(url);
    }
    openPath(path) {
        this.shellGateway.openPath(this.repo.getFullPath(path));
    }
}
exports.Project = Project;
