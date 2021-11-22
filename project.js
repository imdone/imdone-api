const Task = require('imdone-core/lib/task')
const fs = require('fs')

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

    addCardMetadata (task, key, value) {
      if (!/^['"]/.test(value) && /\s/.test(value)) value = `"${value}"`
      const metaData = `${key}${repo.config.getMetaSep()}${value}`
      const content = Task.addToLastCommentInContent.apply(card, [task.content, metaData, repo.config.isMetaNewLine()])
      this.updateCardContent(task, content)
    }

    updateCardContent (task, content) {
      repo.modifyTaskFromContent(task, content)
    }

    newCard (list, path) {
      // TODO move this to repo
      const fullPath = repo.getFullPath(path)
      if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, '')
      }
      repo.newCard(list, fullPath)
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