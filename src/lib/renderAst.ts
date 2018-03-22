import React from 'react'
import rehypeReact from 'rehype-react'
import { LiTag, OlTag, PTag, UlTag } from '../components/MarkdownTags'

type renderAstType = (htmlAst: JSON) => string

const renderAst: renderAstType = new rehypeReact({
  components: {
    li: LiTag,
    ol: OlTag,
    p: PTag,
    ul: UlTag,
  },
  createElement: React.createElement,
}).Compiler

export default renderAst
