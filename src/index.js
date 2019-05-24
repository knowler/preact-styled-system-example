import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import { global, theme } from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={global} />
    <main p={3}>
      <h1>Hello</h1>
    </main>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.querySelector('#root'))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}
