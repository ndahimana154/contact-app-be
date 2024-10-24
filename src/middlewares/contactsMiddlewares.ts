import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status";
import contactsRepositories from "../repositories/contactsRepositories"

export const isContactExists = async (req: any, res: Response, next: NextFunction): Promise<any> => {
    try {
        const contact = await contactsRepositories.findContactByUserIdAndAttribute(req.user._id, "_id", req.params.id);
        if (!contact) {
            return res.status(httpStatus.NOT_FOUND).json({
                status: httpStatus.NOT_FOUND,
                message: "Contact not found"
            })
        } else {
            req.contact = contact;
            return next();

        }
    } catch (error: any) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        })
    }
}