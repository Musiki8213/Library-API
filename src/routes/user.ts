import {Router, Request, Response} from 'express';
import {body, param, validationResult} from 'express-validator';

const router = Router();

let users = [
    {id: 1, name: "Professor Snape", email: "snape@gmail.com"},
    {id: 2, name: "Professor Albust", email: "albust@gmail.com"}
 ]

 router.get("/", (req: Request, res: Response) => {
    res.status(200).json(users);
 });

 //http://localhost:3000/user/8

 router.get("/:id", 
   [param('id').isInt().withMessage('ID must be an integer')],
    (req: Request, res: Response) => {  
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const id = parseInt(req.params.id);
        const user = users.find(u => u.id === id);   
        
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json(user);
    })

    router.post("/",[
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Invalid email format"),
    ]

    , (req: Request, res: Response) => {  
        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            console.log(errors, "request");

            return res.status(400).json({ errors: errors.array() });
        }
        
        const {name, email} = req.body;
        const newUser = {
            id: users.length + 1,
            name,
            email
        };
        users.push(newUser);
        res.status(201).json(newUser);
    }
);


    export default router;