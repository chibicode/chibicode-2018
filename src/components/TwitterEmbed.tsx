// https://github.com/capaj/react-tweet-embed
import classnames from 'classnames'
import { debounce } from 'lodash'
import React from 'react'
import Block, {
  BlockTopSpacing,
  BlockVSpacing,
  BlockWidth,
} from '../components/Block'

// https://dev.twitter.com/web/embedded-tweets/parameters
const twitterOptions = {
  cards: 'true',
  dnt: 'true',
}

interface WindowWithTwttr extends Window {
  twttr: any
}

declare let window: WindowWithTwttr

interface Props {
  twitterId: string
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>
  addSpaceToTop?: boolean
}

enum TweetRenderStatus {
  NOT_READY = 'NOT_READY',
  READY = 'READY',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

interface State {
  tweetRenderStatus: TweetRenderStatus
}

export default class TwitterEmbed extends React.Component<Props, State> {
  public static defaultProps = {
    addSpaceToTop: true,
    wrapperProps: {},
  }

  public wrapper: HTMLElement | null = null

  public state = {
    tweetRenderStatus: TweetRenderStatus.NOT_READY,
  }

  private handleScroll = () => {
    if (
      this.state.tweetRenderStatus === TweetRenderStatus.NOT_READY &&
      this.wrapper &&
      this.wrapper.getBoundingClientRect().top < window.innerHeight
    ) {
      this.setState({ tweetRenderStatus: TweetRenderStatus.READY })
    }
  }

  private handleScrollDebounced = debounce(this.handleScroll, 100)

  private onTweetLoadSuccess = () => {
    this.setState({ tweetRenderStatus: TweetRenderStatus.SUCCESS })
  }

  private onTweetLoadError = () => {
    this.setState({ tweetRenderStatus: TweetRenderStatus.ERROR })
  }

  private renderTweet = (props: Props) => {
    if (window.twttr && window.twttr.ready) {
      window.twttr.ready(
        ({
          widgets,
        }: {
          widgets: { createTweetEmbed: (...args: any[]) => any }
        }) => {
          if (this.wrapper) {
            this.wrapper.innerHTML = ''
          }

          widgets
            .createTweetEmbed(props.twitterId, this.wrapper, twitterOptions)
            .then(this.onTweetLoadSuccess)
            .catch(this.onTweetLoadError)
        }
      )
    }
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScrollDebounced)
  }

  public componentWillUnmount() {
    window.addEventListener('scroll', this.handleScrollDebounced)
  }

  public componentWillUpdate(nextProps: Props, nextState: State) {
    if (nextState.tweetRenderStatus === TweetRenderStatus.READY) {
      this.renderTweet(nextProps)
    }
  }

  public render() {
    const { className, ...restProps } = this.props.wrapperProps!
    const renderSuccess =
      this.state.tweetRenderStatus === TweetRenderStatus.SUCCESS
    return (
      <Block
        {...restProps}
        reactType="div"
        width={BlockWidth.Small}
        vSpacing={renderSuccess ? BlockVSpacing.Medium : BlockVSpacing.None}
        topSpacing={
          this.props.addSpaceToTop! && renderSuccess
            ? BlockTopSpacing.Medium
            : BlockTopSpacing.None
        }
        className={classnames({
          [className || '']: renderSuccess,
        })}
      >
        <div
          ref={c => {
            // https://reactjs.org/docs/refs-and-the-dom.html#refs-and-functional-components
            this.wrapper = c
          }}
        />
      </Block>
    )
  }
}
