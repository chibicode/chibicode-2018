import React from 'react'
import rehypeReact from 'rehype-react'
import {
  BlockquoteTag,
  FigcaptionTag,
  FigureTag,
  H2Tag,
  H3Tag,
  H4Tag,
  H5Tag,
  H6Tag,
  HrTag,
  LiTag,
  OlTag,
  PreTag,
  PTag,
  TwitterEmbedWrapper,
  UlTag,
} from '../components/BlockElements'
import { ATag } from '../components/InlineElements'
import PostSeparator from '../components/PostSeparator'
import ResponsiveIframe from '../components/ResponsiveIframe'

type renderAstType = (
  htmlAst: JSON
) => React.ReactElement<{ children: React.ReactNode }>

const renderAst: renderAstType = new rehypeReact({
  components: {
    a: ATag,
    blockquote: BlockquoteTag,
    figcaption: FigcaptionTag,
    figure: FigureTag,
    h2: H2Tag,
    h3: H3Tag,
    h4: H4Tag,
    h5: H5Tag,
    h6: H6Tag,
    hr: HrTag,
    li: LiTag,
    ol: OlTag,
    p: PTag,
    ul: UlTag,
    pre: PreTag,
    'post-separator': PostSeparator,
    'responsive-iframe': ResponsiveIframe,
    'twitter-embed': TwitterEmbedWrapper,
  },
  createElement: React.createElement,
}).Compiler

export default renderAst
