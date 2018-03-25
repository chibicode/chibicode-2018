import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'
import { StandardTag } from '../components/BlockElements'

interface Props
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
  ratio: string
}

const ResponsiveIframe: React.SFC<Props> = ({ ...props }) => (
  <StandardTag reactType={'span'} className="db">
    <ResponsiveEmbed {...props} />
  </StandardTag>
)

ResponsiveIframe.defaultProps = {
  ratio: '16:9',
}

export default ResponsiveIframe
