import { Router, Request, Response, NextFunction } from 'express';

import { Users } from '../../users/models/Users';
import { Articles } from '../models/Articles';
import { requireAuth } from '../../users/routes/auth.router';

/**
 * Validate requests is valid for add and edit articles
 * 
 * @param req Request
 * @param res Response
 * @param next NextFucntion
 */
async function validateRequest (req: Request, res: Response, next: NextFunction) {
    const { title, description }= req.body

    // check title exists
    if (!title || title.trim().length < 3 ) {
        return res.status(400).send({ message: 'Title is required' });
    }

    // check description exists
    if (!description || description.trim().length < 3 ) {
        return res.status(400).send({ message: 'Description is required' });
    }

    // find the article to check the title is unique
    let query: any= { where: {'title': title} };
    if (req.params.id) {
        query.where.id={ $not: req.params.id}
    }
    const article = await Articles.findOne( query );
    // check that article doesnt exists
    if(article) {
        return res.status(422).send({ message: 'Article may already exist' });
    }    
    next()
}

/**
 * Check authrizaton
 * 
 * @param req Request
 * @param res Response
 * @param next NextFucntion
 */
async function checkAuth (req: Request, res: Response, next: NextFunction) {
    // verfiy that the user is the owner of the article
    const article = await Articles.findByPk( req.params.id );
    if(!article || (article && article.user_id != res.locals.userInfo.id )) {
        return res.status(400).send({ message: 'You can not edit this article' });
    }
    next()
}

/**
 * Method to add new article
 * 
 * @param req Request
 * @param res response
 * @param next NextFunction
 */

 async function addArticle (req: Request, res: Response, next: NextFunction) {
    const { title, description }= req.body
    const newArticle = await new Articles({
        title: title.trim(),
        description: description.trim(),
        user_id:  res.locals.userInfo.id
    });

    let savedArticle;
    try {
        savedArticle = await newArticle.save();
    } catch (e) {
        throw e;
    }

    return res.send( savedArticle )

}

/**
 * Method to Edit article
 * 
 * @param req Request
 * @param res response
 * @param next NextFunction
 */

 async function editArticle (req: Request, res: Response, next: NextFunction) {
    try {
        const { title, description }= req.body
        const { id }= req.params 
        await Articles.update({
            title: title.trim(),
            description: description.trim()
        },
        {
            where: {id}
        })
        const article = await Articles.findByPk( id );
        return res.send( article )
    } catch (e) {
        return res.status(400).send({ message: e });
    }
}

/**
 * Method to Delete article
 * 
 * @param req Request
 * @param res response
 * @param next NextFunction
 */

 async function deleteArticle (req: Request, res: Response, next: NextFunction) {
    try {
        const { id }= req.params 
        await Articles.destroy({
            where: {id}
        })
        return res.send( {message: 'Done successfully'} )
    } catch (e) {
        return res.status(400).send({ message: e });
    }
}

/**
 * Get Articles depends on the route
 * All articles or All logged in user Articles
 * @param req Request
 * @param res Response
 */
async function getAllArticles (req: Request, res: Response) {
    let query: any= {
        include:[
            { model: Users, attributes: ['id','name', 'phone', 'email']},
        ],
        order:[ ['created_at', 'DESC'], ['updated_at', 'DESC'] ]
    }

    if("/mine" == req.route.path){
        const user_id= res.locals.userInfo.id
        // return res.send({ user_id })
        query={...query, where: {user_id} }
    }
    const articles = await Articles.findAll( query );
    res.send(articles);
}

const router: Router = Router();

/**
 * Route to get All articles
 */
router.get('/', getAllArticles);

/**
 * Route to get All Logged in user articles
 */
router.get('/mine', requireAuth, getAllArticles);

/**
 * get article by id
 */
router.get('/:id', async (req: Request, res: Response) => {

    let { id } = req.params;
    const article = await Articles.findOne({
        attributes:['title', 'description'],
        include:[
            { model: Users, attributes: ['id','name', 'phone', 'email']},
        ],
        where: {id}
    });
    res.send(article);
});

/**
 * Route to Add new Article
 * The request must be authorized to procced
 */
router.post('/', requireAuth, validateRequest, addArticle);

/**
 * Route to Edit Article
 * The request must be authorized to procced
 */
router.put('/:id', requireAuth, validateRequest, checkAuth, editArticle);

/**
 * Route to delete Article
 * The request must be authorized to procced
 */
router.delete('/:id', requireAuth, checkAuth, deleteArticle);

export const ArticlesRouter: Router = router;