import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import * as firebase from 'firebase';

const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount(){
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children, this.el,
    );
  }
}

class App extends Component {
  constructor () {
    super ();
    this.state = {
      contacts: [],
      showModal: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  handleShow(){
    this.setState({showModal: true});
  }
  handleHide(){
    this.setState({showModal: false});
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
          phone: data.val().phone,
          city: data.val().city,
          state: data.val().state
        }
        contacts.push(contact);
        that.setState({contacts: contacts});
      });
    });
  }

  handleAddContact(contact){
    let contacts = this.state.contacts;
    contacts.push(contact);
    this.contactRef.push(contact);
    this.setState({contacts: contacts});
    if (this.showModal){
      this.setState({showModal: false});
    }

  }

  handleDeleteContact(id){
    let contacts = this.state.contacts;
    let index = contacts.findIndex(x => x.id === id);
    contacts.splice(index, 1);
    this.setState({contacts: contacts});
  }
  handleForm(x){
    this.setState({showModal: x});
  }
render() {
  const modal = this.state.showModal ? (
    <Modal>
      <div className="modal">
        <div>
        <AddContact
          addContact={this.handleAddContact.bind(this)}
          showForm={this.handleForm.bind(this)} />
        </div>
      <button onClick={this.handleHide}>Hide</button>
    </div>
  </Modal>
) : null;
  return (
    <div className="App container">
      <button onClick={this.handleShow}>Contribute</button>
        <div className="row" id="main-content">
          <div className="col-sm-3" id="Menu_bar">
            <h4>Insert search bar</h4>
          </div>
          <div className="col-sm-7" id="Mind">
            <div className="Main_Form">
                <Contacts contacts={this.state.contacts} onDelete={this.handleDeleteContact.bind(this)}/>
            </div>
          </div>
        </div>
        {modal}
    </div>
  );
}
}

export default App;
