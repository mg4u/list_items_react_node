import { Router, Request, Response } from 'express';
import { UserRouter } from './users/routes/user.router';
import { config } from '../../config/config';
import { Users } from './users/models/Users';
import { ArticlesRouter } from './articles/routes/articles.router';


const c = config;

const router: Router = Router();

router.use('/users', UserRouter);
router.use('/articles', ArticlesRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send('POST /users/login');
});


router.get('/:id', async (req: Request, res: Response) => {
    let { id } = req.params;
    const item = await Users.findAll();
    res.send(item);
});

export const IndexRouter: Router = router;