import React, { useEffect } from 'react';
import ContactsForm from './ContactsForm';
import DisplayContactsComponent from './DisplayContactsComponent'

export default function ContactsComponent() {

    useEffect(() => {

    }, [])

    return (
        <div className="container-fluid w-25 mt-4">
            <ContactsForm />
            <DisplayContactsComponent />
        </div>
    )
}