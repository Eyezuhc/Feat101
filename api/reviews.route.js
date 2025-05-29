import express from "express";
import ReviewsCtrl from "./reviews.controller.js";
// import ReviewsDAO from "../dao/reviewsDAO.js"; // Uncomment if needed

const router = express.Router();

router.get("/", (req, res) => {ReviewsCtrl.apiGetReviews(req, res);});
router.post("/new", (req, res) => {ReviewsCtrl.apiPostReview(req, res);});
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview);

export default router;