import express from 'express';
import dummysRoutes from './dummys.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/dummys', dummysRoutes);

export default router;
