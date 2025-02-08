import { Router } from 'express';
import contactsRouter from '../routers/contacts.js';
import authRouter from '../routers/auth';
const router = Router();
router.use('/contacts', contactsRouter);
router.use('/register', authRouter);
export default router;
