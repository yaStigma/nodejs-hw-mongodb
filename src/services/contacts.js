import { ContactsCollection } from "../db/models/Contact.js";

// export const getAllContacts = async () => {
//     const contacts = await ContactsCollection.find();
//     return contacts;
// };

// export const getContactById = async (contactId) => {
//     const contacts = await ContactsCollection.findById(contactId);
//     return contacts;
// };


export const getAllContacts = () => ContactsCollection.find();
export const getContactById = contactId => ContactsCollection.findById(contactId);