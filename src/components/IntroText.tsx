import React from 'react'
import { LiTag, OlTag, PTag } from '../components/BlockElements'
import { ATag, UnderlineLink } from '../components/InlineElements'

interface Props {
  variation: IntroTextVariation
}

export enum IntroTextVariation {
  NameOnly = 'NameOnly',
  BlogOnly = 'BlogOnly',
  NameAndBlog = 'NameAndBlog',
}

const IntroText: React.SFC<Props> = ({ variation }) => {
  const learnMore = (
    <span>
      <UnderlineLink to="/posts/about">Learn more about me here</UnderlineLink>.
    </span>
  )
  const archive = (
    <span>
      <UnderlineLink to="/posts/">Read the archive here</UnderlineLink>.
    </span>
  )
  return (
    <section>
      <PTag>
        {variation !== IntroTextVariation.BlogOnly && (
          <span>
            I'm <strong>Shu Uesugi</strong>, a software developer in Silicon
            Valley.
          </span>
        )}
        {variation !== IntroTextVariation.NameOnly && (
          <span>
            {' '}
            <strong>Chibicode</strong> is my blog, written with the following
            principles in mind:
          </span>
        )}
        {variation === IntroTextVariation.NameOnly && <span> {learnMore}</span>}
      </PTag>
      {variation !== IntroTextVariation.NameOnly && (
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
          <PTag>
            {learnMore} | {archive}
          </PTag>
        </div>
      )}
    </section>
  )
}

export default IntroText
