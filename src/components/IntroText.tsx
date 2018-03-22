import React from 'react'
import { LiTag, OlTag, PTag } from '../components/BlockElements'
import { ATag, UnderlineLink } from '../components/InlineElements'

interface Props {
  detailed: boolean
}

const IntroText: React.SFC<Props> = ({ detailed }) => {
  const learnMore = (
    <span>
      <UnderlineLink to="/posts/about">
        Learn more about me (and this blog) here
      </UnderlineLink>.
    </span>
  )
  return (
    <section>
      <PTag>
        I'm <strong>Shu Uesugi</strong>, a software developer in San Francisco.{detailed && (
          <span>
            {' '}
            <strong>Chibicode</strong> is my blog, written with the following
            principles in mind:
          </span>
        )}
        {!detailed && <span> {learnMore}</span>}
      </PTag>
      {detailed && (
        <div>
          <OlTag>
            <LiTag>
              <strong>Short</strong>: Keep it as short as possible.
            </LiTag>
            <LiTag>
              <strong>Signal</strong>: Maximize signal-to-noise ratio.
            </LiTag>
            <LiTag>
              <strong>Simple</strong>: Use simple words. Globally, there are{' '}
              <ATag href="https://www.weforum.org/agenda/2015/10/which-languages-are-most-widely-spoken/">
                3x
              </ATag>{' '}
              as many non-native English speakers as native English speakers.
            </LiTag>
          </OlTag>{' '}
          <PTag>{learnMore}</PTag>
        </div>
      )}
    </section>
  )
}

export default IntroText
