import express from 'express';
import { userAuthorization } from '../middlewares/userAuthorization';
import contactsController from '../controllers/contactsController';
import { isContactExists } from '../middlewares/contactsMiddlewares';

const contactsRoute = express.Router();

contactsRoute.get("/get-user-contacts", userAuthorization(["user"]), contactsController.getAllUsersContacts);
contactsRoute.post("/create-new-contact", userAuthorization(["user"]), contactsController.createNewContact);
contactsRoute.put("/update-contact/:id", userAuthorization(["user"]), isContactExists, contactsController.updateContact)
contactsRoute.delete("/delete-contact/:id", userAuthorization(["user"]), isContactExists, contactsController.deleteContact)

export default contactsRoute