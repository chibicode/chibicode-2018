import React from 'react'
import rehypeReact from 'rehype-react'
import {
  H2Tag,
  H3Tag,
  H4Tag,
  H5Tag,
  H6Tag,
  LiTag,
  OlTag,
  PTag,
  UlTag,
} from '../components/BlockElements'
import { ATag } from '../components/InlineElements'
import PostSeparator from '../components/PostSeparator'

type renderAstType = (
  htmlAst: JSON
) => React.ReactElement<{ children: React.ReactNode }>

const renderAst: renderAstType = new rehypeReact({
  components: {
    a: ATag,
    h2: H2Tag,
    h3: H3Tag,
    h4: H4Tag,
    h5: H5Tag,
    h6: H6Tag,
    li: LiTag,
    ol: OlTag,
    p: PTag,
    'post-separator': PostSeparator,
    ul: UlTag,
  },
  createElement: React.createElement,
}).Compiler

export default renderAst
