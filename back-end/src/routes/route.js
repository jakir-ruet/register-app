import express from 'express';
const router = express.Router();

router
      .get('/', (_, res) => res.send('error gone'))

export default router