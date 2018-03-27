import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'
import { BlockTag } from '../components/BlockElements'

interface Props
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
  ratio: string
}

const ResponsiveIframe: React.SFC<Props> = ({ ...props }) => (
  <BlockTag reactType={'span'} className="db">
    <ResponsiveEmbed {...props} />
  </BlockTag>
)

ResponsiveIframe.defaultProps = {
  ratio: '16:9',
}

export default ResponsiveIframe
