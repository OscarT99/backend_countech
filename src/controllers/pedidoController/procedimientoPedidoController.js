const {response} = require('express')
const ProcedimientoPedido = require('../../models/pedidoModel/procedimientoPedido')

const getProcedimientoPedidos = async (req, res = response) => {
    try {
      const listProcedimientoPedidos = await ProcedimientoPedido.findAll();
      res.json({ listProcedimientoPedidos });
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const getProcedimientoPedido = async (req, res = response) => {
    try {
      const { id } = req.params;
      const procedimientoPedido = await ProcedimientoPedido.findByPk(id);
  
      if (procedimientoPedido) {
        res.json(procedimientoPedido);
      } else {
        res.json({
          msg: `No existe un procedimientoPedido con el id ${id}`,
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const postProcedimientoPedido = async (req, res = response) => {
    try {
      const { body } = req;
      await ProcedimientoPedido.create(body);
      res.json({
        msg: 'El ProcedimientoPedido fue agregado con éxito.',
      });
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const putProcedimientoPedido = async (req, res = response) => {
    try {
      const { body } = req;
      const { id } = req.params;
      const procedimientoPedido = await ProcedimientoPedido.findByPk(id);
  
      if (procedimientoPedido) {
        await procedimientoPedido.update(body);
        res.json({
          msg: 'El ProcedimientoPedido fue actualizado correctamente.',
        });
      } else {
        res.status(404).json({
          msg: `No existe un ProcedimientoPedido con el id ${id}`,
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const deleteProcedimientoPedido = async (req, res = response) => {
    try {
      const { id } = req.params;
      const procedimientoPedido = await ProcedimientoPedido.findByPk(id);
  
      if (procedimientoPedido) {
        await procedimientoPedido.destroy();
        res.json({
          msg: 'El ProcedimientoPedido fue eliminado con éxito.',
        });
      } else {
        res.status(404).json({
          msg: `No existe un ProcedimientoPedido con el id ${id}`,
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
    getProcedimientoPedido,
    getProcedimientoPedidos,
    postProcedimientoPedido,
    putProcedimientoPedido,
    deleteProcedimientoPedido,
  };
  