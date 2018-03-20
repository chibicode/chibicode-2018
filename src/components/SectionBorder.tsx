import React from 'react'
import styled from 'styled-components'

const Styled = styled.hr`
  &:before {
    content: '+ * + * +';
  }
`

const SectionBorder: React.SFC<React.HTMLAttributes<HTMLHRElement>> = () => (
  <Styled className="moon-gray tc bn mt4 mb5" />
)

export default SectionBorder
