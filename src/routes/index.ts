import express from "express"
import authRoute from "./authRouter"
import contactsRoute from "./contactsRouter"

const router = express.Router()

router.use("/auth", authRoute);
router.use("/contacts", contactsRoute);
export default router