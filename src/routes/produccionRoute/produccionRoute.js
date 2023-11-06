const { Router } = require('express');

const route = Router();

const { getProduccion, getProducciones, postProduccion, putProduccion, deleteProduccion } = require('../../controllers/produccionController/produccionController');

route.get('/produccion', getProducciones);
route.get('/produccion/:id', getProduccion);
route.post('/produccion', postProduccion);
route.put('/produccion/:id', putProduccion);
route.delete('/produccion/:id', deleteProduccion);

module.exports = route;
