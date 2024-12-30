const express = require('express');

const router = express.Router();
const services = require("../services/services")
const controllers = require('../controllers/controllers');

router.get('/', controllers.findAll);
router.get('/add', services.add);
router.get('/update/:id', controllers.findOne)

router.post('/createuser', controllers.create);
router.put('/update/:id', controllers.update);
router.delete('/delete/:id', controllers.delete);

module.exports = router;