import User from "../database/models/user";
import Session from "../database/models/session";

const findUserByAttribute = async (key: string, value: string) => {
    const user = await User.findOne({ [key]: value });
    return user;
}

const saveUser = async (data: any) => {
    const user = new User(data);
    await user.save();
    return user;
}

export default {
    findUserByAttribute,
    saveUser,
}