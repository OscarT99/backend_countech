const { Router } = require("express")

const route = Router()

const{ getVenta, getVentas, deleteVenta, postVenta, putVenta } = require('../../controllers/venta_controller/venta_controller')

route.get('/venta',getVentas)
route.get('/venta/:id',getVenta)
route.post('/venta',postVenta)
route.put('/venta/:id',putVenta)
route.delete('/venta/:id',deleteVenta)

module.exports = route
