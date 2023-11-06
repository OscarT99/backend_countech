const {response} = require('express')
const Produccion = require('../../models/produccionModel/produccion')

const getProducciones = async (req, res = response) => {
    try {
      const listProducciones = await Produccion.findAll();
      res.json({ listProducciones });
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const getProduccion = async (req, res = response) => {
    try {
      const { id } = req.params;
      const produccion = await Produccion.findByPk(id);
  
      if (produccion) {
        res.json(produccion);
      } else {
        res.json({
          msg: `No existe una producción con el id ${id}`,
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const postProduccion = async (req, res = response) => {
    try {
      const { body } = req;
      await Produccion.create(body);
      res.json({
        msg: 'La producción fue agregada con éxito.',
      });
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const putProduccion = async (req, res = response) => {
    try {
      const { body } = req;
      const { id } = req.params;
      const produccion = await Produccion.findByPk(id);
  
      if (produccion) {
        await produccion.update(body);
        res.json({
          msg: 'La producción fue actualizada correctamente.',
        });
      } else {
        res.status(404).json({
          msg: `No existe una producción con el id ${id}`,
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        msg: '¡Uy! Ha ocurrido un error',
      });
    }
  };
  
  const deleteProduccion = async (req, res = response) => {
    try {
      const { id } = req.params;
      const produccion = await Produccion.findByPk(id);
  
      if (produccion) {
        await produccion.destroy();
        res.json({
          msg: 'La producción fue eliminada con éxito.',
        });
      } else {
        res.status(404).json({
          msg: `No existe una producción con el id ${id}`,
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
    getProduccion,
    getProducciones,
    postProduccion,
    putProduccion,
    deleteProduccion,
  };
  