import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import authRepositories from "../repositories/authRepositories";

export const isUserAlreadyExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user = await authRepositories.findUserByAttribute("email", req.body.email);
        if (user) {
            res.status(httpStatus.BAD_REQUEST).json({
                status: httpStatus.BAD_REQUEST,
                message: "User already exists with this email"
            });
        } else {
            next();
        }
    } catch (error: any) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: error instanceof Error ? error.message : "Something went wrong"
        });
    }
};
