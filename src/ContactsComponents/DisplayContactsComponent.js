import React from 'react'

export default function DisplayContactsComponent(props) {

    return (
        <div className="container-fluid mt-4">
            <div className="card-group">
                <div className="card row-1">
                    <div className="card-body">
                        <p className="card-title text-success" style={{ float: "left" }}>Name</p>
                        <p className="card-text text-primary" style={{ float: "right" }}>Email@gmail.com</p>
                    </div>
                </div>
                <div className="card row-2">
                    <div className="card-body">
                        <p className="card-title text-success" style={{ float: "left" }}>{props.name}</p>
                        <p className="card-text text-primary" style={{ float: "right" }}>{props.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}