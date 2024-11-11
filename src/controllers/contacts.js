import * as contacts from '../services/contacts.js';
import createHttpError from 'http-errors';

export const getStartController = async (req, res) => {
    res.json({
        message: "Start project"
    });
};

export const getContactsController =  async (req, res, next)=> {
         const data = await contacts.getAllContacts();
         
         res.json({
        status: 200,
        message: "Successfully found contacts!",
        data,
    });
    };


export const getContactByIdController = async(req, res, next)=> {
    const {contactId} = req.params;
    const data = await contacts.getContactById(contactId);

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
    const data = await contacts.createContact(req.body);

    res.status(201).json({
        status: 201,
		message: "Successfully created a contact!",
		data,
    });
};