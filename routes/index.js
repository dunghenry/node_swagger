const book = require('./book.route');
const routes = (app) => {
    /**
     * @openapi
     * /:
     *   get:
     *     tags:
     *      - Server
     *     description: Welcome to server🙌🙌
     *     responses:
     *       200:
     *         description: Welcome to server🙌🙌.
     */
    app.get('/', (req, res) => {
        return res.status(200).json({
            message: 'Welcome to server🙌🙌',
        });
    });
    app.use('/api/books', book);
};

module.exports = routes;
