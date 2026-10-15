import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AddTransaction from './sections/AddTransaction.jsx'
import EditTransaction from './sections/EditTransaction.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/addTransaction" element={<AddTransaction />} />
      <Route path="/editTransaction" element={<EditTransaction />} />
    </Routes>
  </BrowserRouter>
)
