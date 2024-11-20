import { ContactsCollection } from "../db/models/Contact.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";
import { SORT_ORDER } from "../constants/index.js";

export const getAllContacts = async ({page = 1, perPage = 10, sortOrder = SORT_ORDER.ASC, sortBy = '_id',}) => {
    const skip =(page - 1) * perPage;
    const data = await ContactsCollection.find().skip(skip).limit(perPage).sort({ [sortBy]: sortOrder }).exec();
    const totalItems = await ContactsCollection.countDocuments();
    const paginationData = calculatePaginationData({totalItems, page, perPage});
    return {
        data,
        ...paginationData,
    };
};
    
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

    return data.value;
};
export const deleteContact = async(contactId) => {
    const data = await ContactsCollection.findOneAndDelete({
        _id: contactId
    });
    return data;
};
