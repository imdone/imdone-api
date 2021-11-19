const Task = require('imdone-core/lib/task')

module.exports = function newProject(_repo) {
  let repo = _repo

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

    addCardMetaData (task, key, value) {
      if (!/^['"]/.test(value) && /\s/.test(value)) value = `"${value}"`
      const metaData = `${key}${repo.config.getMetaSep()}${value}`
      const content = Task.addToLastCommentInContent.apply(card, [task.content, metaData, repo.config.isMetaNewLine()])
      repo.modifyTaskFromContent(task, content)
    }
  }

  return new Project(_repo);
}