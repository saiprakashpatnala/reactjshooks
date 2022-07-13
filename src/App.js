import {useState} from 'react'

import ReadMore from './components/ReadMore'

import ReadLess from './components/ReadLess'

import {GlobalStyle} from './styledComponents'

const reactHooksDescription =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'

const App = () => {
  const [show, setShow] = useState(false)

  const changeState = () => {
    setShow(prevState => !prevState)
  }
  return (
    <>
      <GlobalStyle />
      <>
        {show === false ? (
          <ReadMore changeState={changeState} />
        ) : (
          <ReadLess
            changeState={changeState}
            reactHooksDescription={reactHooksDescription}
          />
        )}
      </>
    </>
  )
}

export default App
