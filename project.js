const Task = require('imdone-core/lib/task')

module.exports = (function () {
  let repo

  class Project {
    constructor(_repo) {
      repo = _repo
    }

    get doneList () {
      return repo.doneList
    }

    addCardMetaData (card, key, value) {
      if (!/^['"]/.test(value) && /\s/.test(value)) value = `"${value}"`
      const metaData = `${key}${repo.config.getMetaSep()}${value}`
      const content = Task.addToLastCommentInContent.apply(card, [card.content, metaData, repo.config.isMetaNewLine()])
      repo.modifyTaskFromContent(card, content)
    }
  }

  return Project;
})();