import styled, { css } from 'styled-components'

export const ProgressContainer = styled('div')`
  height: 25px;
  width: auto;
  background: white;
  border-radius: 50px;
  box-sizing: border-box;
  margin-bottom: 20px;
`
export const Filler = styled.div<{ percentage: number; bgcolor: string }>(
  ({ percentage, bgcolor }) => ({
    height: '100%',
    width: 0,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
    [percentage && (css as any)]: {
      width: `${percentage}%`,
      transition: 'width 1s ease-in-out',
    },
  })
)

export const Label = styled('span')`
  margin-left: 30px;
  height: 100%;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
