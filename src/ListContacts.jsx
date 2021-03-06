import React from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends React.Component {
    
    state = {
        query: ''
    }
    
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        removeContact: PropTypes.func.isRequired
    }

    updateQuery = (query) => this.setState({ query })
    
    clearQuery = () => this.setState({ query: '' })
    

    render(){
        const { contacts, removeContact } = this.props
        const { query } = this.state
        let showingContacts
        if(query){
            const match = new RegExp(escapeRegExp(query), 'i')
            showingContacts = contacts.filter(contact => match.test(contact.name))
        }else{
            showingContacts = contacts
        }

        showingContacts.sort(sortBy('name'))

        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input 
                        className='search-contacts' 
                        placeholder='Busque' 
                        type='text' 
                        value={query}
                        onChange={(e) => this.updateQuery(e.target.value)}
                    />
                </div>
                {showingContacts.length !== contacts.length && 
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                }
                <ol className='contact-list'>
                    {showingContacts.map(contact => (
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
            </div>
        )
    }
}

export default ListContacts