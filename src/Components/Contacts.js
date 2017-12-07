import React, { Component } from 'react';
import ContactItem from './ContactItem';

class Contacts extends Component {
  deleteContact(id){
    this.props.onDelete(id);
  }
  render () {
    let contactItems;
    if(this.props.contacts){
      contactItems= this.props.contacts.map(contact => {
        return (
          <ContactItem onDelete={this.deleteContact.bind(this)} key={contact.id} contact={contact}/>
        );
      });
    }
    return (
      <div className="Contacts">
      {contactItems}
      </div>
    );
  }
}

export default Contacts;
