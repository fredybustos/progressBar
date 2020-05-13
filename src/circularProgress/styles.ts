import styled, { css, keyframes } from 'styled-components'

export const CircularContainer = styled.div<{ size: number | string }>(
  ({ size }) => ({
    height: size,
    width: size,
  })
)

export const CartText = styled.g<{ textColor: string }>(({ textColor }) => ({
  fill: textColor,
  fontSize: 14,
  transform: 'translateY(0.25em)',
}))

export const ChartNumber = styled('text')`
  font-size: 0.6em;
  line-height: 1;
  text-anchor: middle;
  transform: translateY(-0.25em);
`

export const ChartLabel = styled('text')`
  font-size: 0.2em;
  text-transform: uppercase;
  text-anchor: middle;
  transform: translateY(0.7em);
`

const circleChartFill = keyframes`
  to { stroke-dasharray: 0 100; }
`

export const Circle = styled.circle<any>`
  transform: rotate(-90deg);
  transform-origin: center;
  stroke-dasharray: 0;
  animation: ${circleChartFill} 1.5s reverse;
  ${({ progressBar }) =>
    progressBar &&
    css`
      stroke-dasharray: ${progressBar} ${100 - progressBar};
    `}
`
