import React from 'react';

import { connect } from "react-redux";

import ContactManager from './components/contact_manager/ContactManager';

function App(props) {
  return (
    <div>
      <ContactManager
        contacts={props.contacts}
        dispatchAddContact={props.addContact}
        dispatchDeleteContact={props.deleteContact}
        dispatchUpdateContacts={props.updateContacts}        
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
function updateContacts(newContacts) {
  return {
    type: 'UPDATE_CONTACTS',
    newContacts: newContacts
  }
}
const mapDispatchToProps = {
  addContact,
  deleteContact,
  updateContacts
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)