import ReviewsDAO from "../dao/reviewsDAO.js";

export default class ReviewsController {
    static async apiPostReviews(req, res, next) {
        const reviewsPerPage = req.query.reviewsPerPage ? parseInt(req.query.reviewsPerPage, 10) : 20;
        const page = req.query.page ? parseInt(req.query.page, 10) : 0;

        let filters = {};
        if (req.query.name) {
            filters.name = req.query.name;
        } else if (req.query.email) {
            filters.email = req.query.email;
        }

        const { reviewsList, totalNumReviews } = await ReviewsDAO.getReviews({
            filters,
            page,
            reviewsPerPage,
        });

        let response = {
            reviews: reviewsList,
            page: page,
            filters: filters,
            entries_per_page: reviewsPerPage,
            total_results: totalNumReviews,
        };
        res.json(response);
    }
}