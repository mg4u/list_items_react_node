import { Router, Request, Response } from 'express';

import { Users } from '../models/Users';
import * as c from '../../../../config/config';

import * as bcrypt from 'bcrypt';
// import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { NextFunction } from 'connect';

import * as EmailValidator from 'email-validator';
import { config } from 'bluebird';

const router: Router = Router();

async function generatePassword(plainTextPassword: string): Promise<string> {
    // return crypto.createHmac('md5',c.config.salt).update(plainTextPassword).digest("base64");
    const saltRounds = 12;
    // return plainTextPassword;
    return await bcrypt.hash(plainTextPassword, saltRounds);
}

async function comparePasswords(plainTextPassword: string, hash: string): Promise<boolean> {
    // return (await generatePassword(plainTextPassword) == hash)
    // return true;
    return await bcrypt.compare(plainTextPassword, hash);
}

function generateJWT(user: Users): string {
    return jwt.sign(user.short(), c.config.jwt.secret)
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
 //  return next();
    if (!req.headers || !req.headers.authorization){
        return res.status(401).send({ message: 'No authorization headers.' });
    }

    const token_bearer = req.headers.authorization.split(' ');
    if(token_bearer.length != 2){
        return res.status(401).send({ message: 'Malformed token.' });
    }
    
    const token = token_bearer[1];
    return jwt.verify(token, c.config.jwt.secret , async (err, decoded) => {
      if (err) {
        return res.status(401).send({ auth: false, message: 'Failed to authenticate.' });
      }
      // check user is exist
      const user = await Users.findOne({ where: {'api_token': token} });
      if (!user) {
        return res.status(401).send({ auth: false, message: 'Failed to authenticate.' });
      }
    //   return res.send({user, decoded})
      res.locals.userTokenInfo= decoded
      res.locals.userInfo= user
      return next();
    });
}

router.get('/verification', 
    requireAuth, 
    async (req: Request, res: Response) => {
        return res.status(200).send({ auth: true, message: 'Authenticated.' });
});

router.post('/login', async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    // check email is valid
    if (!email || !EmailValidator.validate(email)) {
        return res.status(400).send({ auth: false, message: 'Email is required or malformed' });
    }

    // check email password valid
    if (!password) {
        return res.status(400).send({ auth: false, message: 'Password is required' });
    }
    // return res.send({hash_password});
    
    const user = await Users.findOne({ where: {'email': email} });

    // check that user exists
    if(!user) {
        return res.status(401).send({ auth: false, message: 'Unauthorized' });
    }
    
    // check that the password matches
    const authValid = await comparePasswords(password, user.password)
    
    if(!authValid) {
        return res.status(401).send({ auth: false, message: 'Unauthorized' });
    }

    // Generate JWT
    const jwt = generateJWT(user);
    Users.update({ api_token: jwt }, { where: {id: user.id} } )
    // return res.send(jwt);
    res.status(200).send({ auth: true, token: jwt, user: user.short()});
});

//register a new user
router.post('/', async (req: Request, res: Response) => {
    const {email, password: plainTextPassword, name, phone }= req.body
    // check email is valid
    if (!email || !EmailValidator.validate(email)) {
        return res.status(400).send({ message: 'Email is required or malformed' });
    }

    // check password exists
    if (!plainTextPassword || plainTextPassword.trim().length < 3 ) {
        return res.status(400).send({ message: 'Password is required' });
    }

    // check password exists
    if (!name || name.trim().length < 3 ) {
        return res.status(400).send({ message: 'Name is required' });
    }

    // check password exists
    if (!phone || phone.trim().length < 3 ) {
        return res.status(400).send({ message: 'Phone is required' });
    }

    // find the user
    const user = await Users.findOne({ where: {'email': email} });
    // check that user doesnt exists
    if(user) {
        return res.status(422).send({ message: 'User may already exist' });
    }

    const password = await generatePassword(plainTextPassword.trim());

    const newUser = await new Users({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        password
    });

    let savedUser;
    try {
        savedUser = await newUser.save();
    } catch (e) {
        throw e;
    }
    // return res.send({savedUser})
    // Generate JWT
    const jwt = generateJWT(savedUser);

    Users.update({ secret_key: '', api_token: jwt }, { where: {id: savedUser.id} } )

    res.status(201).send({token: jwt, user: savedUser.short()});
});

router.get('/', async (req: Request, res: Response) => {
    res.send('login')
});

export const AuthRouter: Router = router;