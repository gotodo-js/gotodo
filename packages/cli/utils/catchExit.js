const { Signale } = require('signale')

const logger = new Signale({
  types: {
    abort: {
      badge: '👀',
      color: 'yellow',
      label: 'Abort'
    }
  }
})

module.exports = function catchExit() {
  logger.abort('Nothing happend')
}
