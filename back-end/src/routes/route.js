import express from 'express';
import studentController from '../controllers/studentController.js';
const router = express.Router();

router
      .post('/create', studentController.createStudent)

export default router