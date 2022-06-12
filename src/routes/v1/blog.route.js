const router = require('express').Router();
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const blogValidation = require('../../validations/blog.validation');
const blogController = require('../../controllers/blog.controller');

router.route('/').post(auth('manageBlogs'), validate(blogValidation.createBlog), blogController.createBlog);
module.exports = router;
