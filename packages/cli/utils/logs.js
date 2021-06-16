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

logs.wrap = () => console.log('\n')

logs.done = (...rest) => {
  logs(chalk.green(`✅ Done Todo:`), ...rest)
}

logs.error = (...rest) => {
  logs(chalk.red(`❌ Error:`), ...rest)
}

logs.addTodo = (...rest) => {
  logs(chalk.keyword('coral')(`🎯 Add Todo:`), ...rest)
}

logs.createTag = (...rest) => {
  logs(chalk.cyan(`🏷️  Create Tag:`), ...rest)
}

logs.end = (...rest) => {
  logs(chalk.bold(`✨ Done`), ...rest)
}

module.exports = logs
