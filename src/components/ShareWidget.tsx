import copy from 'clipboard-copy'
import React from 'react'
import styled from 'styled-components'
import { BlockTopSpacing } from '../components/Block'
import { BlockTag, H2Tag } from '../components/BlockElements'
import TwitterEmbed from '../components/TwitterEmbed'
import {
  COLOR_DARK_GRAY,
  COLOR_YELLOW,
  COLOR_YELLOW_SEMI_TRANSPARENT_10,
} from '../constants/styles'

interface UrlBoxProps {
  slug: string
}

interface UrlBoxState {
  copied: boolean
  timeoutId?: number
}

const UrlBoxInput = styled.input`
  padding: 0.5rem;
  border-width: 0.05rem;
  background-color: ${COLOR_YELLOW_SEMI_TRANSPARENT_10};
  &:focus {
    outline: none;
    border-color: ${COLOR_DARK_GRAY};
  }
`

const CopiedText = styled.div`
  background-color: ${COLOR_YELLOW};
`

// Must use control component to make text selectable on mobile
const noOpInputClick = () => {
  return
}

class UrlBox extends React.Component<UrlBoxProps, UrlBoxState> {
  public state = {
    copied: false,
    timeoutId: undefined,
  }

  private urlBoxOnclick: React.MouseEventHandler<HTMLInputElement> = e => {
    // .setSelectionRange(0, 9999) wasn't working well on mobile
    ;(e.target as HTMLInputElement).select()
    const copied = !!copy((e.target as HTMLInputElement).value)
    const { timeoutId } = this.state
    if (copied) {
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
      this.setState({ copied }, () => {
        this.setState({
          timeoutId: window.setTimeout(() => {
            this.setState({ copied: false })
          }, 3000),
        })
      })
    }
  }

  public render() {
    const { slug } = this.props
    const { copied } = this.state
    return (
      <div className="flex items-center">
        <UrlBoxInput
          type="text"
          onClick={this.urlBoxOnclick}
          value={`https://chibicode.com${slug}`}
          onChange={noOpInputClick}
          className="f6 db flex-auto ba b--moon-gray br2"
        />
        {copied && (
          <CopiedText className="ml2 fw6 ph1">Link Copied!</CopiedText>
        )}
      </div>
    )
  }
}

export interface ShareWidgetProps {
  twitterId?: string | null
  slug: string
}

const ShareLinkBg = styled.div`
  background-color: ${COLOR_YELLOW_SEMI_TRANSPARENT_10};
  overflow: hidden;
`

const noOpLinkClick: React.MouseEventHandler<HTMLAnchorElement> = e => {
  e.preventDefault()
}

export const ShareLinkATag = styled.a`
  color: inherit;
`

const ShareWidget: React.SFC<ShareWidgetProps> = ({ twitterId, slug }) => {
  const link = (
    <BlockTag
      className="f6"
      reactType={'div'}
      topSpacing={BlockTopSpacing.Small}
    >
      <div className="flex items-center">
        <strong className="mr2">Share Link:</strong>
        <div className="flex-auto db dn-ns">
          <ShareLinkBg className="ph2 pv2 br2 ba b--moon-gray">
            <ShareLinkATag
              className="flex-auto"
              onClick={noOpLinkClick}
              href={slug}
            >{`https://chibicode.com${slug}`}</ShareLinkATag>
          </ShareLinkBg>
        </div>
        <div className="flex-auto db-ns dn">
          <UrlBox slug={slug} />
        </div>
      </div>
    </BlockTag>
  )

  return (
    <div>
      <H2Tag>Share this article</H2Tag>
      {twitterId && <TwitterEmbed twitterId={twitterId} />}
      {link}
    </div>
  )
}

export default ShareWidget
