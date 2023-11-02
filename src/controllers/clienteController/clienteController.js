const { response } = require('express');
const Cliente = require('../../models/clienteModel/clienteModel');

const getClientes = async (req, res = response) =>{
    try{
        const listClientes = await Cliente.findAll()
        res.json({listClientes})
    }catch(error){
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }
    
}

const getCliente = async (req, res = response) => {
    try{
        const { id } = req.params
        const cliente = await Cliente.findByPk(id)

        if(cliente){
            res.json(cliente)
        }else{
            res.json({
                msg: `No existe un cliente con el id ${id}`
            })
        }
    }catch(error){
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }    
}

const postCliente = async (req, res = response) => {    
    try{
        const { body } = req;
        await Cliente.create(body)

        res.json({
            msg:`El cliente fue agregado con exito`
        })
    }catch(error){
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }
}


const putCliente = async (req, res = response) => {    
    try{
        const {body} = req
        const {id} = req.params
        const cliente = await Cliente.findByPk(id);

        if(cliente){
            await cliente.update(body);
            res.json({
                msg:`El cliente fue actualizado con exito`
            })
        }else{
            res.json({
                msg: `No existe un cliente con el id ${id}`
            })
        }
    }catch(error){
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }
}

const deleteCliente = async (req, res = response) => {
    try{
        const { id } = req.params
        const cliente = await Cliente.findByPk(id)

        if(!cliente){
            res.json({
                msg: `No existe un cliente con el id ${id}`
            })
        }else{
            await cliente.destroy();
            res.json({
                msg:`El cliente fue eliminado con exito`
            })

        }
    }catch(error){
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }    
}

module.exports = {
    getClientes,
    getCliente,
    postCliente,
    deleteCliente,
    putCliente
}