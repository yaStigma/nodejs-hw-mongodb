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
export const createContact = payload => ContactsCollection.create(payload);
export const updateContact = async(contactId, payload, options={}) =>{
    const data = await ContactsCollection.findOneAndUpdate(
        { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
    );

    if (!data || !data.value) return null;

    return {
      contact: data.value,
      isNew: Boolean(data?.lastErrorObject?.upserted),
    };
};
