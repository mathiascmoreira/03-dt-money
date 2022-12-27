import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './ styles/global'
import { defaultTheme } from './ styles/themes/default'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transaction } from './pages/Transactions'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transaction />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
