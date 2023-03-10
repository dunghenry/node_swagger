const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
};

const openApiSpecification = swaggerJsdoc(options);
module.exports = openApiSpecification;
