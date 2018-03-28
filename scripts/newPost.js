// https://github.com/gatsbyjs/gatsby/issues/263#issuecomment-215471892
// https://github.com/pamo/pamo.github.io/blob/6abeed7eba8667cc8abefc282fb7b1b0f09b0e7c/new_post.js
const prompt = require('prompt')
const mkdirp = require('mkdirp')
const _ = require('underscore.string')
const yaml = require('js-yaml')
const fs = require('fs')

prompt.start()

/*eslint-disable */
prompt.get(['title'], (err, result) => {
  'use strict'
  const dir = `./src/pages/posts/${_.slugify(result.title)}`
  mkdirp.sync(dir)

  const tzoffset = new Date().getTimezoneOffset() * 60000 //offset in milliseconds
  const localISOTime = new Date(Date.now() - tzoffset).toISOString()

  let postFileStr = '---\n'

  const frontmatter = {
    title: result.title,
    date: localISOTime,
    draft: true,
    image: './cover.jpg',
    twitterId: null,
  }

  postFileStr += yaml.safeDump(frontmatter)
  postFileStr += '---\n'

  fs.writeFileSync(`${dir}/index.md`, postFileStr, {
    encoding: 'utf-8',
  })

  return console.log(dir)
})
