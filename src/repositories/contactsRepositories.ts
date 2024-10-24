import Contact from "../database/models/contact";

const findUsersContacts = async (userId: string) => {
    return await Contact.find({ userId: userId }).exec();
}

const saveNewContact = async (data: any) => {
    return await Contact.create(data);
}

export default {
    findUsersContacts,
    saveNewContact
}