import express from "express";
import { postsController } from "./controllers/postsController.mjs";
import { adminController } from "./controllers/adminController.mjs";

export const router = express.Router();

router.get("/", postsController.index);

router.get("/posts/:id", postsController.show);



router.get('/admin', adminController.index)
router.get('/admin/create', adminController.create)
router.post('/admin/create', adminController.save)
router.get('/admin/edit/:id', adminController.edit)
router.post('/admin/update/:id', adminController.update)
router.post('/admin/delete/:id', adminController.delete)