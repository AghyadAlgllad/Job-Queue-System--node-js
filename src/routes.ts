import UserRoutes from '../modules/user/router';
import {Router} from 'express';

const router=Router();

router.use('/users',UserRoutes);

export default router;