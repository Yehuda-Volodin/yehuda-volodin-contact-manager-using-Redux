import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  contacts: ["First Contact"],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return { contacts: [...state.contacts, action.newContact] };
    case 'DELETE_CONTACT':
      let newContacts = [...state.contacts];
      newContacts.splice(action.id, 1);
      return { contacts: [...newContacts] };
    case 'UPDATE_CONTACTS':
      return { contacts: [...action.newContacts] };
    default:
      return state;
  }
}
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
