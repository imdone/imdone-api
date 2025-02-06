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
exports.Project = void 0;
/**
 * Represents a project with lists, tasks, and various actions.
 */
class Project {
    /**
     * Gets the project path.
     */
    get path() {
        return;
    }
    /**
     * Gets all lists in the project.
     */
    get lists() {
        return;
    }
    /**
     * Gets the name of the done list.
     */
    get doneList() {
        return;
    }
    /**
     * Gets the current filter applied to the project.
     */
    get filter() {
        return;
    }
    /**
     * Gets the filtered tasks based on the current filter.
     */
    get filteredCards() {
        return;
    }
    /**
     * Gets the last updated timestamp.
     */
    get updatedAt() {
        return;
    }
    /**
     * Sets the filter for task retrieval.
     */
    set filter(filter) {
        //
    }
    /**
     * Initializes the project with a given repository.
     */
    init(repo) { }
    /**
     * Destroys the project instance.
     */
    destroy() { }
    /**
     * Retrieves all cards, optionally filtered.
     */
    getAllCards(filter) {
        return;
    }
    /**
     * Renders Markdown content as HTML.
     */
    renderMarkdown(content) {
        return;
    }
    /**
     * Creates a new card in the project.
     */
    newCard(opts) { }
    /**
     * Adds a card to a file and returns the created task.
     */
    addCardToFile(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    /**
     * Filters lists based on a provided filter.
     */
    filterLists(filter, lists) {
        return;
    }
    /**
     * Saves content to a specified file path.
     */
    saveFile(content, path) { }
    /**
     * Sets the current filter for the project.
     */
    setFilter(filter) { }
    /**
     * Adds metadata to the provided content.
     */
    addMetaToContent(meta, content) {
        return;
    }
    /**
     * Adds tags to the provided content.
     */
    addTagsToContent(tags, content) {
        return;
    }
    /**
     * Adds context to the provided content.
     */
    addContextToContent(contexts, content) {
        return;
    }
    /**
     * Updates the content of a given task.
     */
    updateCardContent(task, content) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Adds metadata to a task.
     */
    addMetadata(task, key, value) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Removes metadata from a task.
     */
    removeMetadata(task, key, value) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Adds a tag to a task.
     */
    addTag(task, tag) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Removes a tag from a task.
     */
    removeTag(task, tag) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Displays a snackbar notification.
     */
    snackBar(alert) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Displays a toast notification.
     */
    toast(alert) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Copies text to the clipboard and shows a message.
     */
    copyToClipboard(text, message) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Opens a URL in the default browser.
     */
    openUrl(url) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Open the given file in the desktop's default manner.
     */
    openPath(filePath) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.Project = Project;
