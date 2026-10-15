import { useEffect, useState } from "react";
import transaction from "../viewData.json"

function TransactionTable(){
    const [transaction, setTransaction] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/transaction').then((res) => res.json()).then((transaction) => setTransaction(transaction))
    }, []);

    return (
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>ProductID</th>
                    <th>ProductName</th>
                    <th>Amount</th>
                    <th>CustomerName</th>
                    <th>Status</th>
                    <th>TransactionDate</th>
                    <th>CreatedBy</th>
                    <th>CreatedOn</th>
                </tr>
                {transaction.map((transcationItem) => (
                    <tr>
                        <th>{transcationItem.id}</th>
                        <th>{transcationItem.productID}</th>
                        <th>{transcationItem.productName}</th>
                        <th>{transcationItem.amount}</th>
                        <th>{transcationItem.customerName}</th>
                        <th>{transcationItem.status? "FAILED" : "SUCCESS"}</th>
                        <th>{transcationItem.transactionDate}</th>
                        <th>{transcationItem.createBy}</th>
                        <th>{transcationItem.createOn}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TransactionTable;