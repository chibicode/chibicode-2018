import React from 'react'
import rehypeReact from 'rehype-react'
import PTag from '../components/PTag'

type renderAstType = (htmlAst: JSON) => string

const renderAst: renderAstType = new rehypeReact({
  components: { p: PTag },
  createElement: React.createElement,
}).Compiler

export default renderAst
