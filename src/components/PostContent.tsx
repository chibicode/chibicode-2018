import React from 'react'
import styled from 'styled-components'
import { BlockTopSpacing } from '../components/Block'
import { PTag } from '../components/BlockElements'
import Button from '../components/Button'
import ShareWidget, { ShareWidgetProps } from '../components/ShareWidget'
import TagsWidget from '../components/TagsWidget'
import { POST_SEPARATOR_DISPLAY_NAME } from '../constants/components'
import chevronDown from '../images/chevron-down.svg'
import { RelatedPostData } from '../lib/getRelatedPostsData'
import renderAst from '../lib/renderAst'

interface Props extends ShareWidgetProps {
  htmlAst: JSON
  expanded: boolean
  relatedPostsData: RelatedPostData
}

interface State {
  expanded: boolean
}

const ChevronDownImage = styled.img`
  position: relative;
  top: 0.125em;
  width: 0.75em;
`

const searchForPostSeparator = (child: React.ReactChild) => {
  if (
    typeof child !== 'string' &&
    typeof child !== 'number' &&
    child.props &&
    child.props.children
  ) {
    const grandChild = React.Children.toArray(child.props.children)[0]

    if (
      typeof grandChild !== 'string' &&
      typeof grandChild !== 'number' &&
      typeof grandChild.type !== 'string' &&
      grandChild.type.displayName === POST_SEPARATOR_DISPLAY_NAME
    ) {
      return grandChild.type.displayName === POST_SEPARATOR_DISPLAY_NAME
    }
  }
  return false
}

export default class PostContent extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = { expanded: props.expanded }
  }

  private renderExpanded() {
    const { htmlAst, twitterId, slug, relatedPostsData } = this.props
    return (
      <div>
        {renderAst(htmlAst)}
        <TagsWidget relatedPostsData={relatedPostsData} />
        <ShareWidget twitterId={twitterId} slug={slug} />
      </div>
    )
  }

  private childArrayBeforeSeparator(): {
    childArray: React.ReactChild[]
    separatorFound: boolean
  } {
    const { htmlAst } = this.props
    let childArray = React.Children.toArray(renderAst(htmlAst).props.children)
    let separatorFound = false
    childArray = childArray.filter((child: React.ReactChild) => {
      if (separatorFound) {
        return false
      } else {
        separatorFound = searchForPostSeparator(child)
        return !separatorFound
      }
    })
    return { childArray, separatorFound }
  }

  private onClickKeepReadingButton: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    this.setState({ expanded: true })
    window.history.pushState({}, '', this.props.slug)
  }

  public render() {
    if (this.state.expanded) {
      return this.renderExpanded()
    } else {
      const { childArray, separatorFound } = this.childArrayBeforeSeparator()
      if (!separatorFound) {
        return this.renderExpanded()
      } else {
        // NOTE: Using Fragment instead of div doesn't work
        return (
          <div>
            {childArray}
            <PTag className="tc" topSpacing={BlockTopSpacing.Medium}>
              <Button onClick={this.onClickKeepReadingButton}>
                Keep Reading<span className="ml2">
                  <ChevronDownImage src={chevronDown} />
                </span>
              </Button>
            </PTag>
          </div>
        )
      }
    }
  }
}
