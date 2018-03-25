import React from 'react'
import styled from 'styled-components'
import {
  COLOR_CLASS_DARK_GRAY,
  COLOR_RED,
  COLOR_YELLOW,
} from '../constants/styles'

interface Props {
  isRed: boolean
}

const postTopBorderClasses = `pt2 mb3 nl3 nr3 nl4-ns nr4-ns b--${COLOR_CLASS_DARK_GRAY} bt bw1`

const PostTopBorderYellow = styled.div`
  background: ${COLOR_YELLOW};
`

const PostTopBorderRed = styled.div`
  background: ${COLOR_RED};
`

const PostTopBorder: React.SFC<Props> = ({ isRed }) =>
  isRed ? (
    <PostTopBorderRed className={postTopBorderClasses} />
  ) : (
    <PostTopBorderYellow className={postTopBorderClasses} />
  )

export default PostTopBorder
