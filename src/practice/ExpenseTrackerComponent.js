import React, { useState, useEffect } from 'react';

import '../css/ExpenseTrackerComponent.css'

function income(amount) {
    return (
        <div className="card border-1 border-success mt-2 rounded-end me-3" style={{ height: "60px" }}>
            <div className="card-body ">
                <div className="row">
                    <div className="col-md-9">
                        <p className="card-title" style={{ fontSize: "20px" }}>INCOME</p>
                    </div>
                    <div className="col-md-2">
                        <p className="card-text pull-right badge" style={{ color: "green", fontSize: "20px", float: "right" }}>$ {amount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function expenseAmount(amount) {
    return (
        <div className="card border-1 border-danger mt-1 mb-2 rounded-end me-3" style={{ height: "60px" }}>
            <div className="card-body ">
                <div className="row">
                    <div className="col-md-9">
                        <p className="card-title" style={{ fontSize: "20px" }}>EXPENSE</p>
                    </div>
                    <div className="col-md-2">
                        <p className="card-text pull-right badge" style={{ color: "red", fontSize: "20px", float: "right" }}>$ {amount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
    // ReactDOM.render(element, document.getElementById('history'));
}
export default function ExpenseTrackerComponent() {
    useEffect(() => {
        document.body.style.backgroundColor = "white";
        //takeStartingAmount();
    }, [])

    //const LOCAL_STORAGE_KEY = "transactions";

    const [initialBalance, setInitialBalance] = useState(400.00);
    const [balance, setBalance] = useState(400.00);
    const [text, setText] = useState('');
    const [expense, setExpense] = useState();
    const [incomeHeader, setIncomeHeader] = useState(0)
    const [expenseHeader, setExpenseHeader] = useState(0)
    const [txHistory, setTxhistory] = useState([])
    const [count, setCount] = useState(0)
    const [removeArrayIndex, setRemoveArrayIndex] = useState(0);
    const [expenseOverAmountMessage, setExpenseOverAmountMessage] = useState(false);

    var historyDummy = []

    const moneyOverload = () => {
        if (text.toString() === "Expense" && (Number(balance) < 0 || Number(balance) - Number(expense) < 0)) {
            alert("overload")
            setExpenseOverAmountMessage(true)
        }
        else {
            setExpenseOverAmountMessage(false)
        }
    };

    const handleSubmit = () => {
        moneyOverload();
        if (text.toString() === "Expense" && Number(balance) > 0 && Number(balance) - Number(expense) >= 0) {
            // ReactDOM.render(expenseAmount(expense), document.getElementById("history"));
            setExpenseHeader(expenseHeader + Number(expense));
            setBalance(Number(balance) - Number(expense))
            setCount(count + 1);
            //setTxhistory.push({ id: count, type: "Expense", amount: expense })
            historyDummy.push({ id: count, type: "Expense", amount: expense })
            setTxhistory(txHistory => [...txHistory, historyDummy[0]])//IMP
        }
        else if (text.toString() === "Income") {
            //dummy = (income(expense));
            // ReactDOM.render(income(expense), document.getElementById("history"));
            setIncomeHeader(incomeHeader + Number(expense))
            setBalance(Number(balance) + Number(expense))
            setCount(count + 1);
            historyDummy.push({ id: count, type: "Income", amount: expense })
            //setTxhistory.push({ id: count, type: "Income", amount: expense })
            //setTxhistory(txHistory => [...txHistory, { id: count, type: "Income", amount: expense }])//IMP
            setTxhistory(txHistory => [...txHistory, historyDummy[0]])//IMP
        }
        // setTxhistory(txHistory => [...txHistory, historyDummy[0]])//IMP
        // console.log("added history = ", historyDummy)
        // console.log("added txhistory= ", txHistory)
    };

    const searchIteamToRemove = (id) => {
        // console.log("txHistory.length ==== ", txHistory.length)
        for (let i = 0; i < txHistory.length; i++) {
            if (txHistory[i].id == id) {
                // console.log(txHistory[i])
                setRemoveArrayIndex(i);
                return i;
            }
        }
    };


    const handleDelete = (e) => {
        //alert(e.target.id)
        // console.log("id=", e.target.id)
        // alert(txHistory[e.target.id])
        //console.log(txHistory[e.target.id])
        // console.table(txHistory)
        // const itemToBeRemoved = txHistory[e.target.id]
        const index = searchIteamToRemove(e.target.id)
        // console.log("removeArrayIndex = ", removeArrayIndex)
        // console.log("index = ", index)
        // console.log("item to be removed = ", txHistory[index])
        const itemToBeRemoved = txHistory[index]
        // console.table(itemToBeRemoved)
        if (itemToBeRemoved.type === "Expense") {
            setExpenseHeader(expenseHeader - itemToBeRemoved.amount)
            setBalance(balance + Number(itemToBeRemoved.amount))
        }
        else if (itemToBeRemoved.type === "Income") {
            setIncomeHeader(incomeHeader - Number(itemToBeRemoved.amount))
            setBalance(balance - itemToBeRemoved.amount)
        }

        txHistory.splice(txHistory.findIndex(a => a.id === itemToBeRemoved.id), 1) //imp stack overflow line
        //setCount(count - 1);
        // console.table(txHistory)
        //print result
        // console.log(txHistory)
    }


    const takeStartingAmount = () => {
        const newAmount = Number(prompt("enter amount"))
        if (!isNaN(newAmount)) {
            setInitialBalance(newAmount)
            setBalance(newAmount)
        }
    }

    return (

        <div className="container-fluid border border-dark rounded-end p-4 w-75 zoom" style={{ height: "800px" }}>
            <div className="row mt-4" style={{ height: "700px" }}>
                <div className="col-6 border-end">
                    <h3 style={{ textAlign: "center" }}>Expense Tracker</h3>
                    <h4>Your Balance</h4>
                    <span style={{ fontSize: "50px" }}>$ {balance}</span>
                    <br />
                    <span className="mb-4">{count > 0 && `Starting balance is ${initialBalance}`}</span>
                    <p> <button onClick={takeStartingAmount} className="btn btn-dark w-50" style={{ fontSize: "1rem" }}>Change Amount</button></p>
                    <div className="card-group mt-2">
                        <div className="card border">
                            <div className="card-body">
                                <h5 className="card-title">INCOME</h5>
                                <p className="card-text" style={{ color: "green", fontSize: "28px" }}>$ {incomeHeader}</p>
                            </div>
                        </div>
                        <div className="card border">
                            <div className="card-body">
                                <h5 className="card-title">EXPENSES</h5>
                                <p className="card-text" style={{ color: "red", fontSize: "28px" }}>$ {expenseHeader}</p>
                            </div>
                        </div>
                    </div>
                    <br />

                    <br />
                    <p><strong>Add New Transaction</strong></p>
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
                        <p style={{ color: "red" }}>{expenseOverAmountMessage && "Money Exceeded Total"}</p>
                        <button className="btn btn-primary mb-4 expenseTracker-button" onClick={handleSubmit} style={{ fontSize: "1rem" }}>Add Expense</button>
                    </div>
                </div>

                <div className="col-4 overflow-auto ms-4" style={{ height: "700px" }}>
                    <p><strong>History</strong></p>
                    <hr />
                    <div className=" d-grid px-md-6" style={{ height: "600px", width: "350px" }} id="history">
                        {/* {income(900)}
                            {expenseAmount(600)} */}
                        <div className="overflow-auto">
                            {
                                count > 0 && txHistory.map((h) =>
                                    <div key={h.id}>{(h.type === "Expense" ? expenseAmount(h.amount) : income(h.amount))}
                                        <div className="col-md-4">
                                            {/* <button className="btn btn-primary" style={{ width: "32px", height: "32px" }}><i className="bi bi-dash-circle" style={{ float: "right", width: "16px", height: "16px" }}></i></button>  */}
                                            <i id={h.id} className="bi bi-trash delete-expenseRecord" onClick={handleDelete}>Remove</i>
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