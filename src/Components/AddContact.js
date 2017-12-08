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
    } else if (this.refs.name.value === ''){
      alert("Name is required!");
    } else if (this.refs.number.value === ''){
      alert("Number is required!");
    } else if (this.refs.city.value === ''){
      alert("City is required!");
    } else {
      alert("title: "+this.refs.title.value);
      alert("contact: "+this.refs.name.value);
      alert("category: "+this.refs.category.value);
      alert("number: "+this.refs.number.value);
      alert("city: "+this.refs.city.value);
      this.setState({newContact:{
        title: this.refs.title.value,
        contact: this.refs.name.value,
        catgetory: this.refs.category.value,
        number: this.refs.number.value,
        city: this.refs.city.value
      }});
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
            <input type="text" ref="name" />
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
            <label>Number</label><br />
            <input type="text" ref="number" />
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
