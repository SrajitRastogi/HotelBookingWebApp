import  express  from "express";
import { updateUser,deleteUser,getUser,getAllUser} from "../Controllers/userController.js";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import { verifyToken,verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("You are authenticated!!");
// })

// router.get("/checkUser/:id",verifyUser,(req,res,next)=>{
//     res.send("You are logged in and can delete your account!")
// })
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello Admin,You are logged in and can delete all account!");
// })

// UPDATE
router.put("/:id",verifyUser,updateUser);
// DELETE
router.delete("/:id",verifyUser,deleteUser);
// GET
router.get("/:id",verifyUser,getUser);
// GET ALL 
router.get("/",verifyAdmin,getAllUser);

export default router