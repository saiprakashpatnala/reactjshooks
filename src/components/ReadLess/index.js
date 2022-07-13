import {
  Container,
  Heading,
  Para,
  Img,
  Description,
  Button,
} from './styledComponents'

const ReadLess = props => {
  const {reactHooksDescription, changeState} = props

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
      <Description>{reactHooksDescription}</Description>
      <Button onClick={ok}>Read Less</Button>
    </Container>
  )
}

export default ReadLess
