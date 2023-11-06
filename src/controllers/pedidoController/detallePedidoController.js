const {response} = require('express')
const DetallePedido = require('../../models/pedidoModel/detallePedido')

const getDetallePedidos = async (req, res = response) => {
    try {
      const listDetallePedidos = await DetallePedido.findAll();
      res.json({ listDetallePedidos });
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const getDetallePedido = async (req, res = response) => {
    try {
      const { id } = req.params;
      const detallePedido = await DetallePedido.findByPk(id);
  
      if (detallePedido) {
        res.json(detallePedido);
      } else {
        res.json({
          msg: `No existe un detallePedido con el id ${id}`,
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const postDetallePedido = async (req, res = response) => {
    try {
      const { body } = req;
      await DetallePedido.create(body);
      res.json({
        msg: 'El DetallePedido fue agregado con éxito.',
      });
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const putDetallePedido = async (req, res = response) => {
    try {
      const { body } = req;
      const { id } = req.params;
      const detallePedido = await DetallePedido.findByPk(id);
  
      if (detallePedido) {
        await detallePedido.update(body);
        res.json({
          msg: 'El DetallePedido fue actualizado correctamente.',
        });
      } else {
        res.status(404).json({
          msg: `No existe un DetallePedido con el id ${id}`,
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const deleteDetallePedido = async (req, res = response) => {
    try {
      const { id } = req.params;
      const detallePedido = await DetallePedido.findByPk(id);
  
      if (detallePedido) {
        await detallePedido.destroy();
        res.json({
          msg: 'El DetallePedido fue eliminado con éxito.',
        });
      } else {
        res.status(404).json({
          msg: `No existe un DetallePedido con el id ${id}`,
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  module.exports = {
    getDetallePedido,
    getDetallePedidos,
    postDetallePedido,
    putDetallePedido,
    deleteDetallePedido,
  };
  
