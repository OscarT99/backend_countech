const { response } = require('express');
const Proveedor = require('../../models/proveedorModel/proveedorModel');

const getProveedores = async (req, res = response) =>{
    try{
        const listProveedores = await Proveedor.findAll()
        res.json({listProveedores})
    }catch(error){
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }
    
}

const getProveedor = async (req, res = response) => {
    try{
        const { id } = req.params
        const proveedor = await Proveedor.findByPk(id)

        if(proveedor){
            res.json(proveedor)
        }else{
            res.json({
                msg: `No existe un proveedor con el id ${id}`
            })
        }
    }catch(error){
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }    
}

const postProveedor = async (req, res = response) => {    
    try{
        const { body } = req;
        await Proveedor.create(body)

        res.json({
            msg:`El proveedor fue agregado con exito`
        })
    }catch(error){
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }
}


const putProveedor = async (req, res = response) => {    
    try{
        const {body} = req
        const {id} = req.params
        const proveedor = await Proveedor.findByPk(id);

        if(proveedor){
            await proveedor.update(body);
            res.json({
                msg:`El proveedor fue actualizado con exito`
            })
        }else{
            res.json({
                msg: `No existe un proveedor con el id ${id}`
            })
        }
    }catch(error){
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }
}

const deleteProveedor = async (req, res = response) => {
    try{
        const { id } = req.params
        const proveedor = await Proveedor.findByPk(id)

        if(!proveedor){
            res.json({
                msg: `No existe un proveedor con el id ${id}`
            })
        }else{
            await proveedor.destroy();
            res.json({
                msg:`El proveedor fue eliminado con exito`
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
    getProveedores,
    getProveedor,
    postProveedor,
    putProveedor,
    deleteProveedor
}