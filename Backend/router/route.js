/** router module */
import { Router } from "express";

/** initialize router */
const router = Router();

/** import  all functions from controller */
import * as controller from '../controller/controller.js';

/**questions routes API to store questions in database*/
router.route('/questions').get(controller.getQuestions).post(controller.insertQuestions).delete(controller.dropQuestions)

/** result routes API to store user result in result collection*/
router.route('/result').get(controller.getResult).post(controller.storeResult).delete(controller.dropResult)

export default router;