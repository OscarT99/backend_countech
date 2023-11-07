const { Router } = require("express")

const route = Router()

const{ getDetalleVenta, getDetallesVentas, postDetalleVenta} = require('../../controllers/detalleVentaController/detalleVentaController')

route.get('/detalleVenta',getDetallesVentas)
route.get('/detalleVenta/:pedidoId',getDetalleVenta)
route.post('/detalleVenta',postDetalleVenta)

module.exports = route
