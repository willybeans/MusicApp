import React, { Component } from 'react';

class ContactItem extends Component {
  deleteContact(id){
    this.props.onDelete(id);
  }
  render() {
    let botBorder = { 'border-bottom' : '5px solid' };
    return (
      <div className="Contacts_List" style={botBorder}>
        <h4> Contact # {this.props.contact.id}
        <a href="#" onClick={this.deleteContact.bind(this, this.props.contact.id)}> X </a>
        </h4>
        <li className="title">{this.props.contact.title}</li>
        <li className="contact">{this.props.contact.contact}</li>
        <li className="category">{this.props.contact.category}</li>
        <li className="phone">{this.props.contact.phone}</li>
        <li className="city">{this.props.contact.city}</li>
      </div>
    );
  }
}

export default ContactItem;
