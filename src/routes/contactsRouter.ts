import express from 'express';
import { userAuthorization } from '../middlewares/userAuthorization';
import contactsController from '../controllers/contactsController';

const contactsRoute = express.Router();

contactsRoute.get("/get-user-contacts", userAuthorization(["user"]), contactsController.getAllUsersContacts);
contactsRoute.post("/create-new-contact", userAuthorization(["user"]), contactsController.createNewContact);

export default contactsRoute