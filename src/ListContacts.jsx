import React from 'react'
import PropTypes from 'prop-types'

class ListContacts extends React.Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        removeContact: PropTypes.func.isRequired
    }

    render(){
        return (
            <ol className='contact-list'>
                {this.props.contacts.map(contact => (
                    <li className='contact-list-item' key={contact.id}>
                        <div className='contact-avatar' style={{ backgroundImage: `url(${contact.avatarURL})` }} />
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button onClick={() => this.props.removeContact(contact)} className='contact-remove'>Remove</button>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListContacts