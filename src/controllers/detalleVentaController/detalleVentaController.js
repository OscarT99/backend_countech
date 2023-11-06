const { response } = require('express');
const Pedido = require('../../models/pedidoModels/pedidoModel');
const ReferenciaPedido = require('../../models/pedidoModels/referenciaPedidoModel');
const ProcesoReferenciaPedido = require('../../models/pedidoModels/procesoReferenciaPedidoModel');
const ColorProcesoReferenciaPedido = require('../../models/pedidoModels/colorProcesoReferenciaPedidoModel');
const TallaColorProcesoReferenciaPedido = require('../../models/pedidoModels/tallaColorProcesoReferenciaPedidoModel');
const DetalleVenta = require('../../models/detalleVentaModels/detalleVentaModel')



const postDetalleVenta = async (req, res = response) => {    
  try{
      const { body } = req;
      await DetalleVenta.create(body)

      res.json({
          msg:`El detalle de venta fue agregado con exito`
      })
  }catch(error){
      console.log(error)
      res.json({
          msg:`Upps ocurrio un error`
      })
  }
}


const getDetallesVentas = async (req, res = response) => {
    try {
        const detallesVentas = await DetalleVenta.findAll({
            include: [
                {
                    model: Pedido,
                    where: {
                        estado: 'Terminado'
                    },
                    include: [
                        {
                            model: ReferenciaPedido,
                            include: [
                                {
                                    model: ProcesoReferenciaPedido,
                                    include: [
                                        {
                                            model: ColorProcesoReferenciaPedido,
                                            include: [
                                                {
                                                    model: TallaColorProcesoReferenciaPedido
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        res.json({ detallesVentas });
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrió un error al obtener los detalles de ventas'
        });
    }
}


const getDetalleVenta = async (req, res = response) => {
    const { id } = req.params;
  
    try {
      const detalleVenta = await DetalleVenta.findByPk(id, {
        include: [
          { model: Pedido },
          { model: ReferenciaPedido },
          { model: ProcesoReferenciaPedido },
          { model: ColorProcesoReferenciaPedido },
          { model: TallaColorProcesoReferenciaPedido }
        ]
      });
  
      if (detalleVenta) {
        res.json({ detalleVenta });
      } else {
        res.status(404).json({
          msg: `No existe un detalle de venta con el ID ${id}`
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: 'Ocurrió un error al obtener el detalle de venta'
      });
    }
  };
  
  module.exports = {
    getDetalleVenta
  };
  






module.exports = {
    postDetalleVenta,
    getDetalleVenta,
    getDetallesVentas,
}
