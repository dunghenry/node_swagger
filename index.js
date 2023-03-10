const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const openApiSpecification = require('./helpers/swagger');
const routes = require('./routes');
const connectDB = require('./config/db');
const port = process.env.PORT || 4000;
const app = express();
connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use(helmet());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpecification));
routes(app);
app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Welcome to server',
    });
});
app.listen(port, () => {
    console.log('Serving running on http://localhost:%d', port);
});
