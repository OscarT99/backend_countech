const { Router } = require("express")

const route = Router()

const{ getVenta, getVentas, putVenta } = require('../../controllers/venta_controller/venta_controller')

route.get('/venta',getVentas)
route.get('/venta/:id',getVenta)
route.put('/venta/:id',putVenta)

module.exports = route
