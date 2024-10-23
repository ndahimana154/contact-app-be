import express from 'express';
import { registerUserSchema } from '../validations/authValidations';
import { isUserAlreadyExists } from '../middlewares/authMiddlewares';
import authControllers from '../controllers/authControllers';
import { bodyValidation } from '../helpers/bodyValidation';

const authRoute = express.Router();

authRoute.post("/register", bodyValidation(registerUserSchema), isUserAlreadyExists, authControllers.registerUser);

export default authRoute;
