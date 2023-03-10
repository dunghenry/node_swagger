const { Router } = require('express');
const bookController = require('../controllers/bookController');
const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         title: De Men Phieu Luu Ky
 *         author: To Hoai
 */
/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */
router.get('/', bookController.getAllBooks);
/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 *       400:
 *         description: Book already exists
 */
router.post('/', bookController.createBook);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 */
router.get('/:id', bookController.getBook);
/**
 * @swagger
 * /api/books/{id}:
 *  put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.put('/:id', bookController.updateBook);
// /**
//  * @swagger
//  * /api/books/{id}:
//  *   delete:
//  *     summary: Remove the book by id
//  *     tags: [Books]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: The book id
//  *     responses:
//  *       200:
//  *         description: The book was deleted
//  *       404:
//  *         description: The book was not found
//  */
/**
 * @openapi
 * '/api/books/{id}':
 *  delete:
 *     tags:
 *     - Books
 *     summary: Remove the book by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description:  The book id
 *        required: true
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', bookController.deleteBook);
module.exports = router;
