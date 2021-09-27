import React, { useState } from "react"
import DisplayContactsComponent from './DisplayContactsComponent'

export default function ContactsForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    var sendName = "", sendEmail = "";

    const [submittedFlag, setSubmittedFlag] = useState(false);

    function handlleClick() {
        // console.log(name);
        // console.log(email);
        sendName = name;
        sendEmail = email;
        setSubmittedFlag(true);
    }

    return (
        <div>
            <div className="container-fluid w-50">
                <label className="form-text"> Contact Name</label>
                <input type="text" className="form-control" name="name" onChange={e => setName(e.target.value)} value={name} required />
                <label className="form-text mt-2"> Contact Email</label>
                <input type="email" className="form-control" name="email" onChange={e => setEmail(e.target.value)} value={email} required />
                <div className="d-grid mt-4">
                    <button className="btn btn-primary" onClick={handlleClick}>Add</button>
                </div>

            </div>
            <div className="container-fluid w-75">
                <div>
                    {submittedFlag && <DisplayContactsComponent name={sendName} email={sendEmail} />}
                </div>
            </div>
        </div>
    )
}