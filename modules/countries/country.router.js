const express = require('express');
const wrap = require('../../common/errors/async-error-wrapper');
const countryService = require('./country.service');
const validateId = require('../../common/validation/objectID.validation');
const { DEFAULT_LANG } = require('../../common/config');
const { ENTITY_NAME } = require('./constants');

const router = express.Router();

router.param(
	'id',
	wrap(async (req, res, next) => {
		const { id } = req.params;
		validateId(id, ENTITY_NAME);
		next();
	})
);

router.get(
	'/',
	wrap(async (req, res) => {
		const lang = req.query.lang || DEFAULT_LANG;
		const isAll = req.query.all || false;
		let data;
		if(isAll){
			data= await countryService.getAllWithPlaces(lang);
		}else{
			data = await countryService.getAll(lang);
		}
		res.json(data);
	})
);

router.get(
	'/:id',
	wrap(async (req, res) => {
		const lang = req.query.lang || DEFAULT_LANG;
		const { id } = req.params;
		const data = await countryService.getOne(id, lang);
		res.json(data);
	})
);

module.exports = router;
