import React, { useEffect } from 'react';
import ContactsForm from './ContactsForm';
// import DisplayContactsComponent from './DisplayContactsComponent'

export default function ContactsComponent() {

    useEffect(() => {

    }, [])

    return (
        <div className="container-fluid mt-4">
            <div >
                <ContactsForm />
            </div>
            {/* <DisplayContactsComponent /> */}
        </div>
    )
}