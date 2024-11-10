import * as contacts from '../services/contacts.js';


export const getStartController = async (req, res) => {
    res.json({
        message: "Start project"
    });
};

export const getContactsController =  async (req, res)=> {
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
        return res.status(404).json({
            status: 404,
            message: "Contact not found",
        });
    }

    res.json({
        status: 200,
        message: `Successfully found contact with id ${contactId}`,
        data,
    });
};