import React from 'react'
import styled from 'styled-components'

const Styled = styled.hr`
  &:before {
    content: '+ * + * +';
    font-family: 'Roboto Mono', monospace;
  }
`

const SectionBorder: React.SFC<React.HTMLAttributes<HTMLHRElement>> = () => (
  <Styled className="code moon-gray tc bn mt4 mb5" />
)

export default SectionBorder
