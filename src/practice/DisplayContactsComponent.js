import React from 'react'

export default function DisplayContactsComponent(props) {

    return (
        <div className="container-fluid">
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <p className="card-title text-success" style={{ float: "left" }}>Name</p>
                        <p className="card-text text-primary" style={{ float: "right" }}>Email@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}