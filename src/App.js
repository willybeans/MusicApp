import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import * as firebase from 'firebase';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      contacts: []
    }
  }

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyByH3hYHm_xX-I8bxcZBqbmMaT4RHtU9Mw",
      authDomain: "musicapp-c75bf.firebaseapp.com",
      databaseURL: "https://musicapp-c75bf.firebaseio.com",
      projectId: "musicapp-c75bf",
      storageBucket: "musicapp-c75bf.appspot.com",
      messagingSenderId: "1094864530762"
      };
    firebase.initializeApp(config);
    this.contactRef = firebase.database().ref();

    this.setState({contacts: [
      {
        id: 11,
        title: 'A-Z Publicists',
        contact: 'Sara Lee',
        category: 'publicist',
        phone: '888-888-8888',
        city: 'Cleveland'
      },
      {
        id: 1,
        title: 'Blue Note',
        contact: 'Johnny Bowtie',
        category: 'venue',
        phone: '555-555-5555',
        city: 'Cincinnati'
      }
    ]});
  }

  componentWillUnmount(){

  }

  componentDidMount(){
    var that = this;
    this.contactRef = firebase.database().ref();
    const contactssRef = this.contactRef.child('contacts');
    this.contactRef.once("value").then(function(snapshot){
      var contacts = [];
      var contactID;
      snapshot.forEach(function(data){
        var contact = {
          id: data.val().id,
          title: data.val().title,
          contact: data.val().contact,
          category: data.val().category,
          phone: data.val().phone,
          city: data.val().city
        }
        contacts.push(contact);
        console.log(data.val().title);
        that.setState({contacts: contacts});
      });
    });
  }

  handleAddContact(contact){
    let contacts = this.state.contacts;
    contacts.push(contact);
    this.contactRef.push(contact);
    this.setState({contacts: contacts});
  }

  handleDeleteContact(id){
    let contacts = this.state.contacts;
    let index = contacts.findIndex(x => x.id === id);
    contacts.splice(index, 1);
    this.setState({contacts: contacts});
  }

render() {
  return (
    <div className="App container">
      <div className="row" id="main-content">
        <div className="col-sm-3" id="Menu_bar">
          <div className="Menu" >
          <h4>Insert Menu Here</h4>
          </div>
        </div>
        <div className="col-sm-7" id="Mind">
          <div className="Main_Form">
            <h4>Insert Form Here</h4>
              <AddContact addContact={this.handleAddContact.bind(this)} />
              <Contacts contacts={this.state.contacts} onDelete={this.handleDeleteContact.bind(this)}/>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
