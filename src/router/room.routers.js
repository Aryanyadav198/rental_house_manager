import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { createRoom , getAllRoom} from "../controller/room.controller.js";





const router = Router();
// Create New Room 
router.route("/create").post(
    upload.array("photos",3),
    createRoom
);
// Get All Rooms
router.route("/get-all").get(
    getAllRoom
);

export default router;