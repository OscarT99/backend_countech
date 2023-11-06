const {Router} = require('express')

const route = Router()

const { getDetallePedido, getDetallePedidos, postDetallePedido, putDetallePedido, deleteDetallePedido } = require('../../controllers/pedidoController/detallePedidoController')

route.get('/detallepedido',getDetallePedidos)
route.get('/detallepedido/:id',getDetallePedido)
route.post('/detallepedido',postDetallePedido)
route.put('/detallepedido/:id',putDetallePedido)
route.delete('/detallepedido/:id',deleteDetallePedido)

module.exports = route