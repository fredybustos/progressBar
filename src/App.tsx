import React, { useState, useEffect } from 'react'

import ProgressBar from './progressBar/ProgressBar'
import CircularProgress from './circularProgress'
import {
  AppContainer,
  Container,
  Title,
  WrapperCircular,
  Button,
} from './styles'

function App() {
  const [colors, setColor] = useState<any[]>(['#5373E9', '#5373E9'])
  const [percentage, setPercentage] = useState<number[]>([])

  useEffect(() => {
    setPercentage([10, 25, 10, 30, 28, 15])
  }, [])

  function getRandomPercentage() {
    return [...new Array(6)].map(() => {
      const percentageRandom = Math.floor(Math.random() * 100)
      return percentageRandom
    })
  }

  function getRandomColor() {
    return [...new Array(6)].map(item => {
      const randomColor = `#${((Math.random() * 0xffffff) << 0).toString(16)}`
      return randomColor
    })
  }

  function handleChangeColors() {
    setColor(getRandomColor())
    setPercentage(getRandomPercentage())
  }

  return (
    <AppContainer>
      <Container>
        <Title>ProgressBar</Title>
        <ProgressBar bgcolor={colors[0]} percentage={percentage[0]} />
        <ProgressBar bgcolor={colors[1]} percentage={percentage[1]} />
        <WrapperCircular>
          <CircularProgress
            percentage={percentage[2]}
            strokeColor={colors[2]}
          />
          <CircularProgress
            percentage={percentage[3]}
            strokeColor={colors[3]}
          />
          <CircularProgress
            percentage={percentage[4]}
            strokeColor={colors[4]}
          />
          <CircularProgress
            percentage={percentage[5]}
            strokeColor={colors[5]}
          />
        </WrapperCircular>
        <Button onClick={handleChangeColors} bgcolor={colors[1]}>
          Change colors
        </Button>
      </Container>
    </AppContainer>
  )
}

export default App
