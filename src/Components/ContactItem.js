import React, { Component } from 'react';

class ContactItem extends Component {
  deleteContact(id){
    this.props.onDelete(id);
  }
  render() {
    return (
      <div className="contactItems shadow">
        <h4> {this.props.contact.title}
        <a href="#" onClick={this.deleteContact.bind(this, this.props.contact.id)}> X </a>
        </h4>
        <li className="contact">{this.props.contact.contact}</li>
        <li className="category">{this.props.contact.category}</li>
        <li className="email">{this.props.contact.email}</li>
        <li className="phone">{this.props.contact.phone}</li>
        <li className="location">{this.props.contact.city},
        {this.props.contact.state}</li>
      </div>
    );
  }
}

export default ContactItem;
