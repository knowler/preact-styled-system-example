import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import { global, theme } from './theme'
import { Link } from './components/Link'
import { AvailableForWork } from './components/AvailableForWork'

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={global} />
    <main p={3} mx='auto' maxWidth='36rem'>
      <h1>Preact X + Styled System</h1>
      <p>This is a demonstration of Preact X and Styled System.</p>
      <p><Link href='https://github.com/knowler/preact-styled-system-example'>View source</Link></p>
      <AvailableForWork />
    </main>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.querySelector('#root'))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}
