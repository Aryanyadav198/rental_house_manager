import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { createRoom , getAllRoom} from "../controller/room.controller.js";





const router = Router();

router.route("/create").post(
    upload.array("photos",3),
    createRoom
);
router.route("/get-all").get(getAllRoom);

export default router;