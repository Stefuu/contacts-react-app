import React from 'react'
import PropTypes from 'prop-types'

let ListContacts = ({contacts, removeContact}) => (
    <ol className='contact-list'>
        {contacts.map(contact => (
            <li className='contact-list-item' key={contact.id}>
                <div className='contact-avatar' style={{ backgroundImage: `url(${contact.avatarURL})` }} />
                <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                </div>
                <button onClick={() => removeContact(contact)} className='contact-remove'>Remove</button>
            </li>
        ))}
    </ol>
)

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    removeContact: PropTypes.func.isRequired
}

export default ListContacts