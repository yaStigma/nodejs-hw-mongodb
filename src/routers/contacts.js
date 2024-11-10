import { Router } from "express";

import { getContactByIdController, getContactsController, getStartController } from "../controllers/contacts.js";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const contactsRouter = Router();


contactsRouter.get("/", ctrlWrapper(getStartController));

contactsRouter.get("/contacts", ctrlWrapper(getContactsController));

contactsRouter.get("/contacts/:contactId", ctrlWrapper(getContactByIdController));


export default contactsRouter;