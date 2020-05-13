import styled, { createGlobalStyle } from 'styled-components'

// App styles
export const AppContainer = styled('main')`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Container = styled('section')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  padding: 2em 0;
  margin: 0 auto;
  height: 80%;
`

export const Title = styled('h1')`
  color: peru;
  color: rgb(75, 75, 75);
  font-size: 28px;
  padding-bottom: 1em;
  font-weight: 600;
  margin: 0px;
`
export const WrapperCircular = styled('div')`
  display: flex;
  justify-content: space-between;
`
export const Button = styled.button<{ bgcolor: string }>(({ bgcolor }) => ({
  background: bgcolor || '#5373E9',
  color: '#fff',
  fontSize: 16,
  fontWeight: 600,
  width: 250,
  height: 40,
  borderRadius: 20,
  marginTop: 50,
  cursor: 'pointer',
}))

// Global styles
export const GlobalStyles = createGlobalStyle`
  body {
    background: #efeff4;
    margin: 0;
    padding: 0;
  }
`
