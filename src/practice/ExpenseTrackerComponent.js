import React, { useState, useEffect } from 'react';

import './ExpenseTrackerComponent.css'

function income(amount) {
    return (
        <div className="card border-success mt-2 rounded-end" style={{ height: "60px" }}>
            <div className="card-body ">
                <div className="row">
                    <div className="col-md-7">
                        <p className="card-title" style={{ fontSize: "20px" }}>INCOME</p>
                    </div>
                    <div className="col-md-5">
                        <p className="card-text pull-right badge" style={{ color: "green", fontSize: "20px", float: "right" }}>$ {amount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function expenseAmount(amount) {
    return (
        <div className="card border-danger mt-1 rounded-pill" style={{ height: "60px" }}>
            <div className="card-body ">
                <div className="row">
                    <div className="col-md-6">
                        <p className="card-title" style={{ fontSize: "20px" }}>EXPENSE</p>
                    </div>
                    <div className="col-md-4">
                        <p className="card-text pull-right badge" style={{ color: "red", fontSize: "20px", float: "right" }}>$ {amount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
    // ReactDOM.render(element, document.getElementById('history'));
}
export default function ExpenseTrackerComponent() {

    const LOCAL_STORAGE_KEY = "transactions";

    const [balance, setBalance] = useState(400.00);
    const [text, setText] = useState('');
    const [expense, setExpense] = useState();
    const [incomeHeader, setIncomeHeader] = useState(0)
    const [expenseHeader, setExpenseHeader] = useState(0)
    const [txHistory, setTxhistory] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.body.style.backgroundColor = "white"

    }, [])


    // var flag = false

    //store data in local store and retrive them
    // useEffect(() => {
    //     const tx = localStorage.getItem(LOCAL_STORAGE_KEY);
    //     if (tx) setTxhistory(tx)
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY, txHistory);
    // }, [txHistory])

    const handleSubmit = () => {
        // flag = true
        if (text.toString() === "Expense" && Number(balance) > 0 && Number(balance) - Number(expense) >= 0) {
            // ReactDOM.render(expenseAmount(expense), document.getElementById("history"));
            setExpenseHeader(expenseHeader + Number(expense));
            setBalance(Number(balance) - Number(expense))
            setCount(count + 1);
            //setTxhistory.push({ id: count, type: "Expense", amount: expense })
            setTxhistory(txHistory => [...txHistory, { id: count, type: "Expense", amount: expense }])//IMP
        }
        else if (text.toString() === "Income") {
            //dummy = (income(expense));
            // ReactDOM.render(income(expense), document.getElementById("history"));
            setIncomeHeader(incomeHeader + Number(expense))
            setBalance(Number(balance) + Number(expense))
            setCount(count + 1);
            //setTxhistory.push({ id: count, type: "Income", amount: expense })
            setTxhistory(txHistory => [...txHistory, { id: count, type: "Income", amount: expense }])//IMP
        }
    };


    const handleDelete = (e) => {
        //alert(e.target.id)
        // alert(txHistory[e.target.id])
        console.log(txHistory[e.target.id])
        const itemToBeRemoved = txHistory[e.target.id]

        if (itemToBeRemoved.type === "Expense") {
            setExpenseHeader(expenseHeader - itemToBeRemoved.amount)
            setBalance(balance + Number(itemToBeRemoved.amount))
        }
        else if (itemToBeRemoved.type === "Income") {
            setIncomeHeader(incomeHeader - Number(itemToBeRemoved.amount))
            setBalance(balance - itemToBeRemoved.amount)
        }

        txHistory.splice(txHistory.findIndex(a => a.id === itemToBeRemoved.id), 1) //imp stack overflow line
        setCount(count - 1);
        //print result
        // console.log(txHistory)
    }

    return (
        <div className="container-fluid border border-dark rounded-end p-4 w-75" style={{ height: "800px" }}>
            <div className="row mt-4" style={{ height: "800px" }}>
                <div className="col-7 border-end">
                    <h3 style={{ textAlign: "center" }}>Expense Tracker</h3>
                    <h4>Your Balance</h4>
                    <span style={{ fontSize: "50px" }}>$ {balance}</span>
                    <br />
                    <sub>{count > 0 && "Starting balance is 400"}</sub>

                    <div className="card-group mt-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">INCOME</h5>
                                <p className="card-text" style={{ color: "green", fontSize: "28px" }}>$ {incomeHeader}</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">EXPENSES</h5>
                                <p className="card-text" style={{ color: "red", fontSize: "28px" }}>$ {expenseHeader}</p>
                            </div>
                        </div>
                    </div>
                    <br />

                    <br />
                    <p><strong>Add new transaction</strong></p>
                    <hr />
                    <div className="d-grid">
                        <strong>Text</strong>
                        {/* <input type="text" className="form-control" placeholder="Enter Text" onChange={(e) => setText(e.target.value)} name="text" /> */}
                        <select className="form-control" onChange={(e) => setText(e.target.value)} name="text" style={{ height: "50px" }}>
                            <option>Select Expense Type</option>
                            <option>Expense</option>
                            <option>Income</option>
                        </select>
                        <br />
                        <strong>Amount</strong>
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input type="text" className="form-control" style={{ height: "50px" }} aria-label="Dollar amount" placeholder="Enter amount" onChange={(e) => setExpense(e.target.value)} name="amount" min="1" />
                        </div>
                        {/* <input type="number" className="form-control" aria-describedby="inputGroup-sizing-lg" placeholder="Enter amount" onChange={(e) => setExpense(e.target.value)} name="amount" min="1" /> */}
                        <br />
                        <button className="btn btn-primary mb-4" onClick={handleSubmit}>Add Expense</button>
                    </div>
                </div>

                <div className="col-4 " >
                    <p><strong>History</strong></p>
                    <hr />
                    <div className=" d-grid px-md-5" style={{ height: "650px", width: "480px" }} id="history">
                        {/* {income(900)}
                            {expenseAmount(600)} */}
                        <div className="overflow-auto p-3">
                            {
                                count > 0 && txHistory.map((h) =>
                                    <div key={h.id}>{(h.type === "Expense" ? expenseAmount(h.amount) : income(h.amount))}
                                        <div className="col-md-1">
                                            {/* <button className="btn btn-primary" style={{ width: "32px", height: "32px" }}><i className="bi bi-dash-circle" style={{ float: "right", width: "16px", height: "16px" }}></i></button>  */}
                                            <button id={h.id} className="btn" onClick={handleDelete}><i className="fa fa-close"></i> Close</button>
                                        </div>

                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}