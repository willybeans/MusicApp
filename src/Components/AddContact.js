import React, { Component } from 'react';


class AddContact extends React.Component {
  constructor(){
    super();
    this.state={
      showForm: true,
      newContact:{}
    }
  }
  handleSubmit(e){
    {/* you can make a general warning if any field is left empty
      but you will have to add a loop to only select the div's that are
      left empty */}
    if(this.refs.title.value === ''){
      alert("Business title is required!");
    } else if (this.refs.contact.value === ''){
      alert("Name is required!");
    } else if (this.refs.email.value === ''){
      alert("Email is required!");
    } else if (this.refs.state.value === ''){
      alert("State is required!");
    } else {
      this.setState({
        showForm: false,
        newContact:{
        id : this.refs.title.value,
        title: this.refs.title.value,
        contact: this.refs.contact.value,
        category: this.refs.category.value,
        email: this.refs.email.value,
        phone: this.refs.phone.value,
        city: this.refs.city.value,
        state: this.refs.state.value,
      }}, function(){
        //console.log(this.state);
        this.props.addContact(this.state.newContact);
        this.props.showForm(this.state.showForm);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form name="test" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Business Title</label><br />
            <input type="text" className="form-control" ref="title" />
          </div>
          <div className="form-group">
            <label>Contact Name</label><br />
            <input type="text" className="form-control" ref="contact" />
          </div>
          <div className="form-group">
            <label>Category</label><br />
            <select ref="category">
              <option value="Venue">Venue</option>
              <option value="Media">Media</option>
              <option value="Blog">Blog</option>
              <option value="Reviewer">Reviewer</option>
              <option value="Publicist">Publicist</option>
              <option value="Playlist">Playlist</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email</label><br />
            <input type="text" className="form-control" ref="email" />
          </div>
          <div className="form-group">
            <label>Phone</label><br />
            <input type="text" className="form-control" ref="phone" />
          </div>
          <div className="form-group">
            <label>City</label><br />
            <input type="text" className="form-control" ref="city" />
          </div>
          <div className="form-group">
            <label>State</label><br />
            <input type="text" className="form-control" ref="state" />
          </div>
          <input type="submit" className="btn btn-outline-primary" value="Submit" />
        </form>
      </div>
    );
  }
}
export default AddContact;
