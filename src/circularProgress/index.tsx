import React, { useState, useEffect } from 'react'
import { CSSProperties } from 'styled-components'

import {
  CartText,
  ChartNumber,
  ChartLabel,
  CircularContainer,
  Circle,
} from './styles'

const circleConfig = {
  viewBox: '0 0 38 38',
  x: '19',
  y: '19',
  radio: '15.91549430918954',
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  size = 200,
  strokeColor = '#5373E9',
  strokeWidth = 3,
  innerText,
  percentage = 0,
  trailStrokeColor = '#F6F6FF',
  textColor = '#404063',
  style,
}) => {
  const [progressBar, setProgressBar] = useState(0)

  useEffect(() => {
    setProgressBar(percentage)
  }, [percentage])

  return (
    <CircularContainer size={size} style={style}>
      <svg viewBox={circleConfig.viewBox}>
        <circle
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill='transparent'
          stroke={trailStrokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={0}
        />

        <Circle
          progressBar={progressBar}
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill='transparent'
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDashoffset={0}
        />

        <CartText textColor={textColor}>
          <ChartNumber x='50%' y='50%'>
            {progressBar}%
          </ChartNumber>
          {innerText && (
            <ChartLabel x='50%' y='50%'>
              {innerText}
            </ChartLabel>
          )}
        </CartText>
      </svg>
    </CircularContainer>
  )
}
export default CircleProgress

interface CircleProgressProps {
  size?: number | string
  strokeColor?: string
  strokeWidth?: number
  innerText?: string
  percentage?: number
  trailStrokeColor?: string
  speed?: number
  textColor?: string
  style?: CSSProperties
}
