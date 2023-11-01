const { response } = require('express');
const AbonoVenta = require('../../models/abono_venta_models/abono_venta_models');



const getAbonoVentas = async (req, res = response) => {
    try {
        const listAbonoVentas = await AbonoVenta.findAll()
        res.json({ listAbonoVentas })
    } catch (err) {
        console.log(err)
        res.json({
            msg: `Error en la lista de ventas`
        })
    }

}

const getAbonoVenta = async (req, res = response) => {
    const { id } = req.params
    const venta = await AbonoVenta.findByPk(id)

    if (venta) {
        res.json(venta)
    } else {
        res.status(404).json({
            msg: `No existe una venta con el id ${id}`
        })
    }
}
/*
const postAbonoAbonoVenta = async (req, res = response) => {
    const { body } = req;

    try {
        await AbonoAbonoVenta.create(body)

        res.json({
            msg: `El abono fue agregado con éxito`
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: `Upps ocurrio un error`
        })
    }
}
*/

const postAbonoVenta = async (req, res) => {
    const { body } = req;
  
    try {
      // Crea el abono y asocia automáticamente la venta a través de la clave foránea
      const nuevoAbono = await AbonoVenta.create(body);
  
      res.json({
        msg: `El abono fue agregado con éxito`,
        abono: nuevoAbono, // Opcional: Devuelve los datos del abono creado
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: `Upps, ocurrió un error al agregar el abono.`,
      });
    }
  };
  
const putAbonoVenta = async (req, res = response) => {
    const { body } = req
    const { id } = req.params

    try {
        const venta = await AbonoVenta.findByPk(id);

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

const deleteAbonoVenta = async (req, res = response) => {
    const { id } = req.params
    const venta = await AbonoVenta.findByPk(id)

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
    getAbonoVentas,
    getAbonoVenta,
    postAbonoVenta,
    deleteAbonoVenta,
    putAbonoVenta
}
