import React, { Component } from 'react';

class ContactItem extends Component {
  deleteContact(id){
    this.props.onDelete(id);
  }
  render() {
    let botBorder = {
      'border-bottom' : '5px solid',
      'list-style-type' : 'none'
     };
    return (
      <div className="Contacts_List" style={botBorder}>
        <h4> {this.props.contact.title}
        <a href="#" onClick={this.deleteContact.bind(this, this.props.contact.id)}> X </a>
        </h4>
        <li className="contact">{this.props.contact.contact}</li>
        <li className="category">{this.props.contact.category}</li>
        <li className="email">{this.props.contact.email}</li>
        <li className="city">{this.props.contact.city}</li>
      </div>
    );
  }
}

export default ContactItem;
