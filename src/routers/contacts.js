import { Router } from "express";

import { getContactByIdController, getContactsController, getStartController,createContactsController } from "../controllers/contacts.js";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const contactsRouter = Router();


contactsRouter.get("/", ctrlWrapper(getStartController));

contactsRouter.get("/contacts", ctrlWrapper(getContactsController));

contactsRouter.get("/contacts/:contactId", ctrlWrapper(getContactByIdController));

contactsRouter.post("/contacts", ctrlWrapper(createContactsController));



export default contactsRouter;