import express from "express";
import { DashTestimonial } from "../controllers/Dashboardcontroller.js";
import { SeeFeedBack } from "../controllers/Dashboardcontroller.js";

const router = express();

router.post('/testimonial',DashTestimonial)
router.get('/seefeedback',SeeFeedBack)

export default router;