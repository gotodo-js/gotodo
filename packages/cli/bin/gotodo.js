#!/usr/bin/env node --trace-warnings

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const add = require('../commands/add')
const done = require('../commands/done')
const gotodo = require('../commands/gotodo')
const list = require('../commands/list')

/**
 * Design:
 Usage:
gotodo
-  add <something>		‘add’ one todo’
-  done <something>		‘make one todo done’ —all ‘make all todos doen’
-  remove <something> 		 ‘remove one todo’  —all  ‘remove all todos’
-  clear		‘clear all removed todos permanently’
-  start  ‘start gotodo server’  (default to web) —desktop ‘start desktop app’
 */

yargs(hideBin(process.argv))
  .usage(`$0 \n\n 💘 The best todolist tool for developers.`)
  .command('$0', 'Run command by prompts', {}, gotodo)
  .command(
    'add <something>',
    'Add a todo',
    (y) =>
      y
        .positional('something', {
          desc: 'Write something to do',
          type: 'string',
        })
        .option('tags', {
          alias: 't',
          type: 'array',
          desc: 'Specify the tags to add on. e.g. --tag=a,b,c',
        }),
    add
  )
  .command('done', 'Done a todo', {}, done)
  .command(
    'list',
    'List todos',
    (y) =>
      y
        .option('done', {
          alias: 'd',
          desc: 'List all finished todos',
          type: 'boolean',
        })
        .option('tag', {
          alias: 't',
          desc: 'List all tags',
          type: 'boolean',
        })
        .option('all', {
          alias: 'a',
          desc: 'List all todos, including finished',
          type: 'boolean',
        }),
    list
  )
  /* Any command-line argument given that is not demanded, or does not have a corresponding description, will be reported as an error.
  https://yargs.js.org/docs/#api-reference-strictenabledtrue */
  .strict()
  .alias('help', 'h')
  .alias('version', 'v').argv
