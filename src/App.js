import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      contacts: []
    }
  }

  componentWillMount(){
    this.setState({contacts: [
      {
        id: '1',
        title: 'A-Z Publicists',
        contact: 'Sara Lee',
        category: 'publicist',
        phone: '888-888-8888',
        city: 'Cleveland'
      },
      {
        id: '2',
        title: 'Blue Note',
        contact: 'Johnny Bowtie',
        category: 'venue',
        phone: '555-555-5555',
        city: 'Cincinnati'
      }
    ]});
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
              <AddContact />
              <Contacts contacts={this.state.contacts} onDelete={this.handleDeleteContact.bind(this)}/>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
