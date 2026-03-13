import { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Globalstyle, lighTheme } from './styles'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lighTheme}>
      <Globalstyle />
      <App />
    </ThemeProvider>
   
  </StrictMode>
)
