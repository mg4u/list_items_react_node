import { Router, Request, Response } from 'express';

import { Users } from '../models/Users';
import { AuthRouter, requireAuth } from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/', requireAuth, async (req: Request, res: Response) => {
    // return res.send(req.headers)
    res.send( res.locals.userInfo)
});

router.get('/:id', async (req: Request, res: Response) => {
    let { id } = req.params;
    const item = await Users.findByPk(id);
    res.send(item);
});

export const UserRouter: Router = router;