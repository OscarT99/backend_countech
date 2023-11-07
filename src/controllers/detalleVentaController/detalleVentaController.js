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
  const { pedidoId } = req.params; // Cambia req.params.id a req.params.pedidoId

  try {
      const detallesVenta = await DetalleVenta.findAll({
          where: {
              pedido: pedidoId, // Buscar detalles de venta relacionados con el pedido
          },
          include: [
              {
                  model: Pedido,
                  where: {
                      estado: 'Terminado',
                      id: pedidoId, // Filtro por ID de pedido
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

      if (detallesVenta.length === 0) {
          res.status(404).json({
              msg: `No existen detalles de venta para el pedido con ID ${pedidoId} en estado 'Terminado'`
          });
      } else {
          res.json(detallesVenta);
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Ocurrió un error al obtener los detalles de venta'
      });
  }
}

module.exports = {
  getDetalleVenta,
  getDetallesVentas,
}




module.exports = {
    postDetalleVenta,
    getDetalleVenta,
    getDetallesVentas,
}
