const { Router } = require("express")

const route = Router()

const { getProcedimientoPedidos, getProcedimientoPedido, postProcedimientoPedido, putProcedimientoPedido, deleteProcedimientoPedido } = require('../../controllers/pedidoController/procedimientoPedidoController')

route.get('/procedimiento', getProcedimientoPedidos)
route.get('/procedimiento/:id',getProcedimientoPedido)
route.post('/procedimiento',postProcedimientoPedido)
route.put('/procedimiento/:id',putProcedimientoPedido)
route.delete('/procedimiento/:id',deleteProcedimientoPedido)

module.exports = route