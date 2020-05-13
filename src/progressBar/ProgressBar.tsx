import React from 'react'

import { ProgressContainer, Filler, Label } from './styles'

const ProgressBar: React.FC<{ bgcolor: string; percentage: number }> = ({
  bgcolor,
  percentage,
}) => {
  return (
    <ProgressContainer>
      <Filler percentage={percentage} bgcolor={bgcolor}>
        <Label>{`${percentage}%`}</Label>
      </Filler>
    </ProgressContainer>
  )
}

export default ProgressBar
