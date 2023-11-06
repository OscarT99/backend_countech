const {response} = require('express')
const Referencia = require('../../models/pedidoModel/referenciaPedido')

const getReferencias = async (req, res = response) => {
    try {
      const listReferencias = await Referencia.findAll();
      res.json({ listReferencias });
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const getReferencia = async (req, res = response) => {
    try {
      const { id } = req.params;
      const referencia = await Referencia.findByPk(id);
  
      if (referencia) {
        res.json(referencia);
      } else {
        res.json({
          msg: `No existe una referencia con el id ${id}`,
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const postReferencia = async (req, res = response) => {
    try {
      const { body } = req;
      await Referencia.create(body);
      res.json({
        msg: 'La referencia fue agregada con éxito.',
      });
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const putReferencia = async (req, res = response) => {
    try {
      const { body } = req;
      const { id } = req.params;
      const referencia = await Referencia.findByPk(id);
  
      if (referencia) {
        await referencia.update(body);
        res.json({
          msg: 'La referencia fue actualizada correctamente.',
        });
      } else {
        res.status(404).json({
          msg: `No existe una referencia con el id ${id}`,
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const deleteReferencia = async (req, res = response) => {
    try {
      const { id } = req.params;
      const referencia = await Referencia.findByPk(id);
  
      if (referencia) {
        await referencia.destroy();
        res.json({
          msg: 'La referencia fue eliminada con éxito.',
        });
      } else {
        res.status(404).json({
          msg: `No existe una referencia con el id ${id}`,
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
    getReferencia,
    getReferencias,
    postReferencia,
    putReferencia,
    deleteReferencia,
  };
  