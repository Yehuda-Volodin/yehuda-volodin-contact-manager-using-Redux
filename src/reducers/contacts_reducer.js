const initialState = {
    contacts: ["First Contact"],
  };
export function contacts_reducer(state = initialState, action) {
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