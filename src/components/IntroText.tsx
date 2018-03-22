import React from 'react'
import { LiTag, OlTag, PTag } from '../components/MarkdownTags'

const IntroText: React.SFC<{}> = () => (
  <section>
    <PTag>
      I'm <strong>Shu Uesugi</strong>, a software developer in San Francisco.{' '}
      <strong>Chibicode</strong> is my blog, written with the following
      principles in mind:
    </PTag>
    <OlTag>
      <LiTag>
        <strong>Short</strong>: Keep it as short as possible.
      </LiTag>
      <LiTag>
        <strong>Signal</strong>: Maximize signal-to-noise ratio.
      </LiTag>
      <LiTag>
        <strong>Simple</strong>: Use simple words. Globally, there are{' '}
        <a href="https://www.weforum.org/agenda/2015/10/which-languages-are-most-widely-spoken/">
          3x
        </a>{' '}
        as many non-native English speakers as native English speakers.
      </LiTag>
    </OlTag>
  </section>
)

export default IntroText
