import { useState } from "react";
import Navbar from "../components/Navbar";

function EditTransaction(){

    const [transaction, setTransaction] = useState({
        id: '',
        productID: '',
        productName: '',
        amount: '',
        customerName: '',
        status: '0',
        createBy: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setTransaction((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/transaction/${transaction.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                ...transaction,
                amount: Number(transaction.amount),
                staus: Number(transaction.status)
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    return(
        <div>
            <Navbar />
            <div className="insert-form">
                <h1>Please Insert Edit Data</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label className="input-segment">
                        <h5>ID</h5>
                        <input name="id" type="text" value={transaction.id} onChange={handleChange}/>
                    </label>
                    <label className="input-segment">
                        <h5>Product ID</h5>
                        <input name="productID" type="text" value={transaction.productID} onChange={handleChange}/>
                    </label>
                    <label className="input-segment">
                        <h5>Product Name</h5>
                        <input name="productName" type="text" value={transaction.productName} onChange={handleChange}/>
                    </label>
                     <label className="input-segment">
                        <h5>Amount</h5>
                        <input name="amount" type="number" value={transaction.amount} onChange={handleChange}/>
                    </label>
                    <label className="input-segment">
                        <h5>Customer Name</h5>
                        <input name="customerName" type="text" value={transaction.customerName} onChange={handleChange}/>
                    </label>
                    <label className="input-segment">
                        <h5>Status</h5>
                        <label>
                            Success
                            <input name="status" type="radio" checked={transaction.status === "0"} value="0" onChange={handleChange}/>
                        </label>
                        <label>
                            Failed
                            <input name="status" type="radio" checked={transaction.status === "1"} value="1" onChange={handleChange}/>
                        </label>
                    </label>
                    <label className="input-segment">
                        <h5>Created By</h5>
                        <input name="createBy" type="text" value={transaction.createBy} onChange={handleChange}/>
                    </label>

                    <button>
                        Submit
                    </button>

                </form>
            </div>
        </div>
    )
}

export default EditTransaction;