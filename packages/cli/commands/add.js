const prompts = require('prompts')
const catchExit = require('../utils/catchExit')

module.exports = async function add(argv) {
  const { something, tags: inputTags } = argv

  if (inputTags) {
    return console.log(inputTags)
  }

  const { tags } = await prompts({
    type: 'autocompleteMultiselect',
    name: 'tags',
    message: 'Pick tags 🏷',
    hint: '- Space to select. Return to submit (blank to skip).',
    instructions: false,
    initial: 0,
    choices: [
      {
        title: '[add a new tag]',
        value: '[add a new tag]',
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

  const shouldAddNew = tags.includes('[add a new tag]')

  const { newTag } =
    shouldAddNew &&
    (await prompts({
      type: 'text',
      name: 'newTag',
      message: 'Input a new tag name',
    }))
}
