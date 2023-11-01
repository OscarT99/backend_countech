const { Router } = require("express")

const route = Router()

const{ getAbonoVenta, getAbonoVentas, deleteAbonoVenta, postAbonoVenta, putAbonoVenta } = require('../../controllers/abono_venta_controller/abono_venta_controller')

route.get('/abonoVenta',getAbonoVentas)
route.get('/abonoVenta/:id',getAbonoVenta)
route.post('/abonoVenta',postAbonoVenta)
route.put('/abonoVenta/:id',putAbonoVenta)
route.delete('/abonoVenta/:id',deleteAbonoVenta)

module.exports = route
