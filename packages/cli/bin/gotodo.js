#!/usr/bin/env node --trace-warnings

const { prompt } = require('enquirer')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

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

yargs(hideBin(process.argv)).usage(
  `$0 \n\n 💘 The best todolist tool for developers.`
).argv
