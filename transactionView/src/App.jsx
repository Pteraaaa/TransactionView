import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import TransactionTable from './components/TransactionTable'

function App() {
  const [transaction, setTransaction] = useState([]);

  const handleSeed = () => {
    fetch('http://localhost:3000/transaction/seed', {
      method: "POST",
      header: {
        'Content-Type': 'application/json'
      },
    })

    window.location.reload()
  }

  const handleDelete = () => {
    fetch('http://localhost:3000/transaction', {
      method: "DELETE",
      header: {
        'Content-Type': 'application/json'
      },
    })

    window.location.reload()
  }

  return (
    <>
      <div className="appBody">
        <Navbar />

        <div className="transaction-table">
          <h2>Table Transaction View</h2>
          <div className="table">
            <TransactionTable />
          </div>
        </div>

        <button onClick = {handleSeed}>Seed</button>
        <button onClick={handleDelete}>Delete All Data</button>
      </div>
    </>
  )
}

export default App
