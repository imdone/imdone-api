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
    get filteredCards() {
        return null;
    }
    set filter(filter) {
        //
    }
    init(repo) { }
    destroy() { }
    newCard(opts) { }
    filterLists(filter, lists) {
        return null;
    }
    saveFile(content, path) { }
    setFilter(filter) { }
    updateCardContent(task, content) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    addMetadata(task, key, value) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    removeMetadata(task, key, value) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    addTag(task, tag) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    removeTag(task, tag) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    snackBar(alert) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    toast(alert) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    copyToClipboard(text, message) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    openUrl(url) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    openPath(path) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.Project = Project;
