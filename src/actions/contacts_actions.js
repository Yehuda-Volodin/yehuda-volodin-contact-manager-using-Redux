export function addContact(newContact) {
    return {
        type: 'ADD_CONTACT',
        newContact: newContact
    }
}
export function deleteContact(id) {
    return {
        type: 'DELETE_CONTACT',
        id: id
    }
}
export function updateContacts(newContacts) {
    return {
        type: 'UPDATE_CONTACTS',
        newContacts: newContacts
    }
}