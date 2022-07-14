import express from 'express';
import teacherController from '../controllers/teacherController.js';
const router = express.Router();

router.post('/register', teacherController.Register);
router.post('/login', teacherController.Login);

export default router;