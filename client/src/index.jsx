import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { TransactionsContext } from './context/TransactionContext'
import App from './App'

ReactDOM.render(
  <TransactionsContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </TransactionsContext>,
  document.getElementById('root')
)
