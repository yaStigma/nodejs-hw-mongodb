import { Router } from "express";

import { getContactByIdController, 
    getContactsController, 
    getStartController,
    createContactsController, 
    upsertContactsController, 
    patchContactsController} from "../controllers/contacts.js";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const contactsRouter = Router();


contactsRouter.get("/", ctrlWrapper(getStartController));

contactsRouter.get("/contacts", ctrlWrapper(getContactsController));

contactsRouter.get("/contacts/:contactId", ctrlWrapper(getContactByIdController));

contactsRouter.post("/contacts", ctrlWrapper(createContactsController));

contactsRouter.put("/contacts/:contactId",ctrlWrapper(upsertContactsController));

contactsRouter.patch("/contacts/:contactId",ctrlWrapper(patchContactsController));


export default contactsRouter;