import React from 'react';

import { connect } from "react-redux";

import ContactManager from './components/contact_manager/ContactManager';

import {addContact, deleteContact, updateContacts} from './actions/contacts_actions';

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

const mapDispatchToProps = {
  addContact,
  deleteContact,
  updateContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(App)