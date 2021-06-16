const chalk = require('chalk')
const prompts = require('prompts')
const logs = require('../utils/logs')

function trimItems(arr) {
  if (!Array.isArray(arr)) return undefined
  return arr.filter((item) => item.trim())
}

function chalkBgTags(arr) {
  return arr.map((item) => chalk.inverse(item)).join(' ')
}

module.exports = async function add(argv) {
  const { something, tags: inputTags } = argv

  let tags, newTag

  // if option tags passed. e.g. --tags=a,b,c
  if (inputTags !== undefined) {
    // TODO: logs.createTag when new tag created
    tags = trimItems(inputTags.map((t) => t.split(',')).flat())
  } else {
    // ask tags to add by prompts
    const res = await prompts({
      type: 'autocompleteMultiselect',
      name: 'tags',
      message: 'Pick tags 🏷',
      hint: '- Space to select. Return to submit (blank to skip).',
      instructions: false,
      initial: 0,
      choices: [
        {
          title: '[add new tag(s)]',
          value: '[add new tag(s)]',
        },
        {
          title: 'Bug',
          value: 'Bug',
        },
        {
          title: 'Feature',
          value: 'Feature',
        },
      ],
    })

    // add selected tags
    tags = trimItems(res.tags).filter((t) => t !== '[add new tag(s)]')

    // push new tags when selected [add new tag(s)]
    const shouldAddNew = res.tags.includes('[add new tag(s)]')
    if (shouldAddNew) {
      const res = await prompts({
        type: 'list',
        name: 'newTags',
        message: 'Input in the new tag(s)',
        separator: ',',
      })

      tags.push(...res.newTags.map((t) => t.replace(/,/g, '')))
    }
  }

  logs.wrap()

  // If there is new tag
  if (newTag?.trim()) {
    logs.createTag(newTag)
  }
  logs.addTodo(`${something}${tags.length ? ' - ' + chalkBgTags(tags) : ''}`)

  logs.wrap()
  logs.end()
}
