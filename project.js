const Task = require('imdone-core/lib/task')

module.exports = function newProject(_repo, _eventGateway) {
  let repo = _repo
  let eventGateway = _eventGateway

  class Project {
    get path () {
      return repo.path
    }

    get doneList () {
      return repo.doneList
    }

    get lists () {
      return repo.getDefaultView().lists
    }

    get allLists () {
      return repo.lists
    }

    get filter () {
      return repo.filter
    }

    set filter (filter) {
      repo.setFilter(filter)
    }

    addMetadata (task, key, value) {
      if (!/^['"]/.test(value) && /\s/.test(value)) value = `"${value}"`
      const metaData = `${key}${repo.config.getMetaSep()}${value}`
      const content = task.addToLastCommentInContent(task.content, metaData, repo.config.isMetaNewLine())
      this.updateCardContent(task, content)
    }

    addTag (task, tag) {
      const tagContent = `${repo.config.getTagPrefix()}${tag}`
      const content = task.addToLastCommentInContent(task.content, tagContent, repo.config.isMetaNewLine())
      this.updateCardContent(task, content)
    }

    updateCardContent (task, content) {
      repo.modifyTaskFromContent(task, content)
    }

    newCard (list, path) {
      repo.newCard(list, path)
    }

    snackBar ({message, type, duration}) {
      eventGateway.emit('alert', {msg: message, type: type || 'is-info', duration})
    }

    toast ({message, type, duration}) {
      eventGateway.emit('toast', {message, type, duration})
    }
  }

  return new Project(_repo);
}