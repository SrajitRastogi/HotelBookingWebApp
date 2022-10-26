import  express  from "express";
import { createHotel,updateHotel,deleteHotel,getHotel,getHotels, countByCity, countByType, getHotelRooms} from "../Controllers/hotelController.js";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import { verifyToken,verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/",verifyAdmin, createHotel);
// UPDATE
router.put("/:id",verifyAdmin,updateHotel);
// DELETE
router.delete("/:id",verifyAdmin,deleteHotel);
// GET
router.get("/find/:id",getHotel);
// GET ALL 
router.get("/",getHotels);

router.get("/",getHotels);
router.get("/countbyCity",countByCity);
router.get("/countbyType",countByType);
router.get("/room/:id",getHotelRooms);

export default router