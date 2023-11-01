const { response } = require('express');
const Venta = require('../../models/venta_models/venta_models');


const getVentas = async (req, res = response) => {
    try {
        const listVentas = await Venta.findAll()
        res.json({ listVentas })
    } catch (err) {
        console.log(err)
        res.json({
            msg: `Error en la lista de ventas`
        })
    }

}

const getVenta = async (req, res = response) => {
    const { id } = req.params
    const venta = await Venta.findByPk(id)

    if (venta) {
        res.json(venta)
    } else {
        res.status(404).json({
            msg: `No existe una venta con el id ${id}`
        })
    }
}

const postVenta = async (req, res = response) => {
    const { body } = req;

    try {
        await Venta.create(body)

        res.json({
            msg: `La venta fue agregada con éxito`
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: `Upps ocurrio un error`
        })
    }
}


const putVenta = async (req, res = response) => {
    const { body } = req
    const { id } = req.params

    try {
        const venta = await Venta.findByPk(id);

        if (venta) {
            await venta.update(body);
            res.json({
                msg: `La venta fue actualizada con éxito`

            })
        } else {
            res.status(404).json({
                msg: `No existe una venta con el id ${id}`
            })
        }
    } catch (error) {

    }
}

const deleteVenta = async (req, res = response) => {
    const { id } = req.params
    const venta = await Venta.findByPk(id)

    if (!venta) {
        res.status(404).json({
            msg: `No existe una venta con el id ${id}`
        })
    } else {
        await venta.destroy();
        res.json({
            msg: `La venta fue eliminada con éxito`
        })

    }
}

module.exports = {
    getVentas,
    getVenta,
    postVenta,
    deleteVenta,
    putVenta
}
