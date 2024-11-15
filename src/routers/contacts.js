import { Router } from "express";

import { getContactByIdController, 
    getContactsController, 
    getStartController,
    createContactsController, 
    upsertContactsController, 
    patchContactsController,
    deleteContactsController} from "../controllers/contacts.js";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../utils/validateBody.js";
import { contactAddSchema, contactUpdateSchema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";

const contactsRouter = Router();


contactsRouter.get("/", ctrlWrapper(getStartController));

contactsRouter.get("/contacts", ctrlWrapper(getContactsController));

contactsRouter.get("/contacts/:contactId", isValidId, ctrlWrapper(getContactByIdController));

contactsRouter.post("/contacts", validateBody(contactAddSchema), ctrlWrapper(createContactsController));

contactsRouter.put("/contacts/:contactId", isValidId, validateBody(contactAddSchema), ctrlWrapper(upsertContactsController));

contactsRouter.patch("/contacts/:contactId", isValidId, validateBody(contactUpdateSchema), ctrlWrapper(patchContactsController));

contactsRouter.delete("/contacts/:contactId", isValidId, ctrlWrapper(deleteContactsController));
export default contactsRouter;