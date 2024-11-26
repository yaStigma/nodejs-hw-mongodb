import * as contacts from '../services/contacts.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
export const getStartController = async (req, res) => {
    res.json({
        message: "Start project"
    });
};

export const getContactsController =  async (req, res, next)=> {
         
    const {page, perPage} = parsePaginationParams(req.query);
    const { sortBy, sortOrder } = parseSortParams(req.query);
    const {_id: userId} = req.user;

    const data = await contacts.getAllContacts({page, perPage, sortBy, sortOrder, userId});
         
         res.json({
        status: 200,
        message: "Successfully found contacts!",
        data,
    });
    };



export const getContactByIdController = async(req, res, next)=> {
    const {contactId} = req.params;
    const { _id: userId } = req.user;
    const data = await contacts.getContactById({contactId, userId});

    if(!data) {
        throw createHttpError(404, "Contact not found");
    
    }

    res.json({
        status: 200,
        message: `Successfully found contact with id ${contactId}`,
        data,
    });
};

export const createContactsController = async (req, res, next) => {
const {_id: userId} = req.user;
    const data = await contacts.createContact({...req.body, userId});

    res.status(201).json({
        status: 201,
		message: "Successfully created a contact!",
		data,
    });
};

export const upsertContactsController = async (req, res) =>{
    const {contactId} = req.params;
    const data = await contacts.updateContact(contactId, req.body, {
        upsert: true,
      });


    if(!data) {
        throw createHttpError(404, "Contact not found");
    }
    const status = data.isNew ? 201 : 200;

    res.status(status).json({
        status,
		message: "Successfully patched a contact!",
		data,
    });
};

export const patchContactsController = async (req, res) => {
    const {contactId} = req.params;
    
    const data = await contacts.updateContact(contactId, req.body);
   
    if(!data) {
        throw createHttpError(404, "Contact not found");
    }

    res.json({
        status: 200,
		message: "Successfully patched a contact!",
		data,
    });
};


export const deleteContactsController = async (req, res) => {
    const {contactId} = req.params;
    const data = await contacts.deleteContact(contactId);
    
    if(!data) {
        throw createHttpError(404, "Contact not found");
    }
    res.status(204).send();
};