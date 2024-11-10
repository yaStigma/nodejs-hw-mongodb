import { Router } from "express";

import { getContactByIdController, getContactsController, getStartController } from "../controllers/contacts.js";



const contactsRouter = Router();


contactsRouter.get("/", getStartController);

contactsRouter.get("/contacts", getContactsController);

contactsRouter.get("/contacts/:contactId", getContactByIdController);


export default contactsRouter;