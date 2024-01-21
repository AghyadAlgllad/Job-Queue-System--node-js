import express,{Express,Request,Response} from 'express';
import { UserService } from './service';
const router=express.Router();
const userService= new UserService();

router.get('/',async (req:Request,res:Response)=>
    {
        const results= await userService.index();
        res.send(results);
    }
);
router.get('/:id',async (req:Request,res:Response)=>
    {
        const user=await userService.show(req.params.id);
        res.send(user);
    }
);
router.post('/',(req:Request,res:Response)=>
    res.send(userService.save(req.body))
);

export default router;