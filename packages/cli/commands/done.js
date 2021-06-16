const prompts = require('prompts')
const logs = require('../utils/logs')

const fakeTodoList = [
  { title: 'Drink milk', value: 'Drink milk' },
  { title: 'Eat junk foods', value: 'Eat junk foods' },
  { title: 'Play basketball', value: 'Play basketball' },
  { title: 'Fix some bugs', value: 'Fix some bugs' },
  {
    title: 'Write some codes',
    value: 'Write some codes',
    description: 'Tags: Dev, Sport. Created at: 2021-06-16 01:45:23',
  },
]

module.exports = async function done(argv) {
  const { selected } = await prompts({
    type: 'autocomplete',
    name: 'selected',
    choices: fakeTodoList,
    message: 'Choose a todo to make it done.',
  })

  logs.wrap()
  logs.done(selected)
}
