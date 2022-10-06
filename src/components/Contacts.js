import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    state = {
        contacts: [{
            id: 1,
            name: 'Madushan',
            email: 'madushan@gmail.com',
            phone: '+94718895181'
        },
        {
            id: 2,
            name: 'Nipuna',
            email: 'nipuna@gmail.com',
            phone: '+94715595181'
        },
        {
            id: 3,
            name: 'Kamal',
            email: 'kamal@gmail.com',
            phone: '+9477785181'
        },
        ]
    }

    render() {
        const { contacts } = this.state
        return (
            <>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                ))
                }
            </>
        )
    }
}

export default Contacts;