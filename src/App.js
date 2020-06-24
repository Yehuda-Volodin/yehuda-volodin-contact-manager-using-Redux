import React from 'react';

import { connect } from "react-redux";

import ContactManager from './components/ContactManager';

function App(props) {
  return (
    <div>
      <ContactManager
        contacts={props.contacts}
        dispatchAddContact={props.addContact}
        dispatchDeleteContact={props.deleteContact}
      />
    </div>
  );
}

function mapStateToProps(store) {
  return {

    contacts: store.contacts
  };
}
function addContact(newContact) {
  return {
    type: 'ADD_CONTACT',
    newContact: newContact
  }
}
function deleteContact(id) {
  return {
    type: 'DELETE_CONTACT',
    id: id
  }
}
const mapDispatchToProps = {
  addContact,
  deleteContact
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)