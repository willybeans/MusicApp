import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import * as firebase from 'firebase';

var contributeDisplay = {
  display: 'block'
}

class App extends Component {
  constructor () {
    super ();
    this.state = {
      contacts: [],
      showContribute: false
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
  }

  componentWillUnmount(){

  }

  componentDidMount(){
    var that = this;
    this.contactRef = firebase.database().ref();
    const contactssRef = this.contactRef.child('contacts');
    this.contactRef.once("value").then(function(snapshot){
      var contacts = [];
      snapshot.forEach(function(data){
        var contact = {
          id: data.val().id,
          title: data.val().title,
          contact: data.val().contact,
          category: data.val().category,
          email: data.val().email,
          city: data.val().city
        }
        contacts.push(contact);
        that.setState({contacts: contacts});
      });
    });
  }

  handleClickContribute(){
  //let show = this.state.showContribute;
  if(!show){
    this.setState({showContribute: true});
    contributeDisplay = { display: 'block' };
  } else {
    this.setState({showContribute: false});
    contributeDisplay = { display: 'none' };
  }
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
        <div className="col-sm-3" id="Menu_bar" onClick={this.handleClickContribute.bind(this)}>
          <div className="Menu" style={contributeDisplay} >
            <AddContact addContact={this.handleAddContact.bind(this)} />
          </div>
        </div>
        <div className="col-sm-7" id="Mind">
          <div className="Main_Form">
              <Contacts contacts={this.state.contacts} onDelete={this.handleDeleteContact.bind(this)}/>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
