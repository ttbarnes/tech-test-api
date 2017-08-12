import express from 'express';
import dummysCtrl from '../controllers/dummys.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/dummys - Get list of users */
  .get(dummysCtrl.list);

export default router;
