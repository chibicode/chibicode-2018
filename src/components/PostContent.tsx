import React from 'react'
import ShareWidget, { ShareWidgetProps } from '../components/ShareWidget'
import { POST_SEPARATOR_DISPLAY_NAME } from '../constants/components'
import renderAst from '../lib/renderAst'

interface Props extends ShareWidgetProps {
  htmlAst: JSON
  expanded: boolean
}

interface State {
  expanded: boolean
}

export default class PostContent extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = { expanded: props.expanded }
  }

  private renderExpanded() {
    const { htmlAst, twitterId, slug } = this.props
    return (
      <div>
        {renderAst(htmlAst)}
        <ShareWidget twitterId={twitterId} slug={slug} />
      </div>
    )
  }

  public render() {
    const { htmlAst } = this.props
    if (this.state.expanded) {
      return this.renderExpanded()
    } else {
      let childArray = React.Children.toArray(renderAst(htmlAst).props.children)
      let separatorFound = false
      childArray = childArray.filter((child: React.ReactChild) => {
        if (
          typeof child === 'string' ||
          typeof child === 'number' ||
          typeof child.type === 'string'
        ) {
          return false
        } else if (child.type.displayName === POST_SEPARATOR_DISPLAY_NAME) {
          separatorFound = true
        }
        return !separatorFound
      })
      if (!separatorFound) {
        return this.renderExpanded()
      } else {
        return (
          <div>
            {childArray.map(child => {
              const component = React.cloneElement(child as React.ReactElement<
                any
              >)
              return component
            })}
          </div>
        )
      }
    }
  }
}
