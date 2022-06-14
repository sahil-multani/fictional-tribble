const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const categoryValidation = require('../../validations/category.validation');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageCategorys'), validate(categoryValidation.createCategory), categoryController.createCategory)
  .get(auth('getCategorys'), validate(categoryValidation.getCategorys), categoryController.getCategorys);

router
  .route('/:categoryId')
  .get(auth('getCategorys'), validate(categoryValidation.getCategory), categoryController.getCategory)
  .patch(auth('manageCategorys'), validate(categoryValidation.updateCategory), categoryController.updateCategory)
  .delete(auth('manageCategorys'), validate(categoryValidation.deleteCategory), categoryController.deleteCategory);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Categorys
 *   description: Category management and retrieval
 */

/**
 * @swagger
 * /categorys:
 *   post:
 *     summary: Create a category
 *     description: Can create categorys.
 *     tags: [Categorys]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user
 *               - type
 *               - manufacturer
 *               - model
 *             properties:
 *               user:
 *                 type: string
 *               type:
 *                 type: string
 *                 description: category type (car, var, bike, etc...)
 *               manufacturer:
 *                 type: string
 *               model:
 *                 type: string
 *                 description: category model (308, Demio, Aqua, etc...)
 *               numberplate:
 *                  type: string
 *               makeyear:
 *                  type: string
 *               registeryear:
 *                  type: string
 *               capacity:
 *                  type: string
 *               fuel:
 *                  type: string
 *               color:
 *                  type: string
 *             example:
 *               user: (User ID)
 *               type: car
 *               manufacturer: Mazda
 *               model: Demio
 *               numberplate: KM-1898
 *               makeyear: 2007
 *               registeryear: 2011
 *               capacity: 5
 *               fuel: Petrol
 *               color: Red
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Category'
 *       "400":
 *         $ref: '#/components/responses/Duplicate'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all categorys
 *     description: Retrieve all categorys.
 *     tags: [Categorys]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: user
 *         schema:
 *           type: string
 *         description: User id
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of categorys
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Category'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /categorys/{id}:
 *   get:
 *     summary: Get a category
 *     description: fetch Categorys by id
 *     tags: [Categorys]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Category'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a category
 *     description: Update categorys.
 *     tags: [Categorys]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *               type:
 *                 type: string
 *                 description: category type (car, var, bike, etc...)
 *               manufacturer:
 *                 type: string
 *               model:
 *                 type: string
 *                 description: category model (308, Demio, Aqua, etc...)
 *               numberplate:
 *                  type: string
 *               makeyear:
 *                  type: string
 *               registeryear:
 *                  type: string
 *               capacity:
 *                  type: string
 *               fuel:
 *                  type: string
 *               color:
 *                  type: string
 *             example:
 *               user: (User ID)
 *               type: car
 *               manufacturer: Mazda
 *               model: Demio
 *               numberplate: KM-1898
 *               makeyear: 2007
 *               registeryear: 2011
 *               capacity: 5
 *               fuel: Petrol
 *               color: Red
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Category'
 *       "400":
 *         $ref: '#/components/responses/Duplicate'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a category
 *     description: Delete categorys.
 *     tags: [Categorys]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
