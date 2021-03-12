const HTTP_HEADERS = [
	['Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept,Authorization,Origin'],
	['Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'],
	['Access-Control-Allow-Credentials', 'true']
];

const CURR_CLIENT_DOMAIN = process.env.CURR_CLIENT_DOMAIN || '';
const REMOUTE_CLIENT_HOST = `https://${CURR_CLIENT_DOMAIN}`;

const ORIGINS_HOST = [
	REMOUTE_CLIENT_HOST,
	'http://localhost:33821',
	'http://localhost:8081',
	'http://localhost:8082',
	'http://localhost:8083'
];

module.exports = { HTTP_HEADERS, ORIGINS_HOST };
