import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyForm from './form.jsx'
import ExpenseTracker from './Expensetracker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />    
    <ExpenseTracker />
  </StrictMode>,
)
