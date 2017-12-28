import React, { Component } from 'react';


class AddContact extends React.Component {
  constructor(){
    super();
    this.state={
      newContact:{}
    }
  }
  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert("Title is required!");
    } else if (this.refs.contact.value === ''){
      alert("Name is required!");
    } else if (this.refs.email.value === ''){
      alert("Email is required!");
    } else if (this.refs.city.value === ''){
      alert("City is required!");
    } else {
      this.setState({newContact:{
        id : this.refs.title.value,
        title: this.refs.title.value,
        contact: this.refs.contact.value,
        category: this.refs.category.value,
        phone: this.refs.email.value,
        city: this.refs.city.value
      }}, function(){
        //console.log(this.state);
        this.props.addContact(this.state.newContact);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Add Contact</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Contact Name</label><br />
            <input type="text" ref="contact" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              <option value="venue">Venue</option>
              <option value="media">Media</option>
              <option value="blog">Blog</option>
              <option value="reviewer">Reviewer</option>
              <option value="publicist">Publicist</option>
            </select>
          </div>
          <div>
            <label>Email</label><br />
            <input type="text" ref="email" />
          </div>
          <div>
            <label>City</label><br />
            <input type="text" ref="city" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default AddContact;
