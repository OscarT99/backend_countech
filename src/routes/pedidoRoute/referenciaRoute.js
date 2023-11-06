const {Router} = require('express')

const route = Router()

const { getReferencia, getReferencias, postReferencia, putReferencia, deleteReferencia } = require('../../controllers/pedidoController/referenciaController')

route.get('/referencia',getReferencias)
route.get('/referencia/:id',getReferencia)
route.post('/referencia',postReferencia)
route.put('/referencia/:id',putReferencia)
route.delete('/referencia/:id',deleteReferencia)

module.exports = route