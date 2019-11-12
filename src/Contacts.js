import React, {Component} from 'react';
import ContactRow from './ContactRow.js'

export default class extends Component {
    state = {
        contacts: getContacts()
    };

    render() {
        return (
            <div>
                <h2>Contacts</h2>
                <hr/>
                {this.state.contacts.map(contacts => {
                        return (<div>
                            <ContactRow key={contacts.phone}
                                        name={contacts.name}
                                        phone={contacts.phone}
                            />
                        </div>);
                    }
                )
                }
            </div>
        );
    }
}

function getContacts() {
    return [
        {
            name: 'John',
            phone: '546789096',
            age: 23
        },
        {
            name: 'Jack',
            phone: '534567889',
            age: 32
        },
        {
            name: 'Vasya',
            phone: '567654567',
            age: 27
        }
    ];
}
