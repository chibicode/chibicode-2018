const shell = require('shelljs')

shell.ls('./src/**/__generated__/*.ts').forEach(file => {
  shell.sed('-i', 'date: Date', 'date: string', file)
})

// If there are files under pages directory that would cause error on gatsby build
// https://github.com/gatsbyjs/gatsby/issues/1499#issuecomment-376059629
shell.ls('./src/**/__generated__/*.ts').forEach(file => {
  shell.cp('-f', file, './src/types/')
  shell.rm(file)
})
