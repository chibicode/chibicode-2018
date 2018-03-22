const shell = require('shelljs')

shell.ls('./src/**/__generated__/*.ts').forEach(file => {
  shell.sed('-i', 'date: Date', 'date: string', file)
})
