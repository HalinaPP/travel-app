const { HTTP_HEADERS } = require('./common/constants.ts');
require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const errorMiddleware = require('./middleware/error-middleware');
const requestLogMiddleware = require('./middleware/request-logger');

const app = express();
const swaggerDoc = YAML.load(path.join(__dirname, './docs/doc.yaml'));

const buildPath = __dirname + '/client/build/';

app.use(helmet());
app.use(express.json());

app.use(requestLogMiddleware);

app.use((req, res, next) => {
	HTTP_HEADERS.forEach((resHeader) => {
		res.setHeader(resHeader[0], resHeader[1]);
	});
	next();
});
app.use(cors({ credentials: true, origin: '*' }));
app.options('*', cors());

app.use(express.static(buildPath));
app.use('/favicon.ico', (req, res) => res.sendStatus(StatusCodes.NO_CONTENT));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', async (req, res) => {
	try {
		res.sendFile(__dirname + buildPath + 'index.html');
	} catch (e) {
		res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.NO_CONTENT);
	}
});

const countryRouter = require('./modules/countries/country.router');
const authRouter = require('./modules/auth/auth.router');

app.use('/countries', countryRouter);

app.use('/auth', authRouter);

app.use((req, res) => {
	res.status(StatusCodes.NOT_IMPLEMENTED).send(ReasonPhrases.NOT_IMPLEMENTED);
});

app.use(errorMiddleware);

module.exports = app;
