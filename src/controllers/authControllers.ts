import { Request, Response } from "express";
import httpStatus from "http-status";
import authRepositories from "../repositories/authRepositories";
import { hashPassword } from "../helpers/authHelpers";

const registerUser = async (req: Request, res: Response): Promise<any> => {
    try {
        req.body.password = hashPassword(req.body.password);
        const user = await authRepositories.saveUser(req.body);
        return res.status(httpStatus.CREATED).json({
            status: httpStatus.CREATED,
            message: "User registered successfully",
            data: { user }
        });
    } catch (error: any) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: error instanceof Error ? error.message : "An unexpected error occurred"
        });
    }
};

export default {
    registerUser
};
