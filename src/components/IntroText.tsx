import React from 'react'
import Container, { Size as ContainerSize } from '../components/Container'

const IntroText: React.SFC<{}> = () => (
  <Container size={ContainerSize.Small}>
    <p>
      I'm <strong>Shu Uesugi</strong>, a software developer in San Francisco.{' '}
      <strong>Chibicode</strong> is my blog, written with the following
      principles in mind:
    </p>
    <ol>
      <li>
        <strong>Short</strong>: Keep it as short as possible.
      </li>
      <li>
        <strong>Signal</strong>: Maximize the signal-to-noise ratio.
      </li>
      <li>
        <strong>Simple</strong>: Use simple words. Globally, there are{' '}
        <a href="https://www.weforum.org/agenda/2015/10/which-languages-are-most-widely-spoken/">
          3x
        </a>{' '}
        as many non-native English speakers than native English speakers.
      </li>
    </ol>
  </Container>
)

export default IntroText
