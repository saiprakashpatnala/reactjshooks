// Write your code here

import {
  Container,
  Heading,
  Para,
  Img,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {changeState} = props

  const ok = () => {
    changeState()
  }

  return (
    <Container>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>
        Hooks solve a wide variety of seemingly unconnected problems in React
        that we have encountered over five years of writing and maintaining tens
        of thousands of components.
      </Description>
      <Button onClick={ok}>Read More</Button>
    </Container>
  )
}

export default ReadMore
