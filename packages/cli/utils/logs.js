const chalk = require('chalk')

/**
 * logs
 * @param {string} title
 * @param {string} message
 * @param {string[]} rest
 */
function logs(title, message, ...rest) {
  // title be message when only title prop passed
  if (message === undefined) {
    message = title
    title = undefined
  }

  // 1. title: message
  // 2. message
  if (title) {
    console.log(`${chalk.bold(title)} ${message}`, ...rest)
  } else {
    console.log(`${message}`, ...rest)
  }
}

logs.done = (...rest) => {
  logs(chalk.green(`✅ Done:`), ...rest)
}

logs.error = (...rest) => {
  logs(chalk.red(`❌ Error:`), ...rest)
}

module.exports = logs
