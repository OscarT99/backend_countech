const { response } = require('express')
const ReferenciaEnPedido = require('../../models/pedidoModels/referenciaPedidoModel')

const getReferenciasEnPedido = async (req, res =response) => {
    try{
        const listReferenciaEnPedido = await ReferenciaEnPedido.findAll()
        res.json({listReferenciaEnPedido})
    }catch(error){
        console.log(error)
        res.json({
            msg: `Upps ocurrio un error`
        })        
    }
    
}

const getReferenciaEnPedido = async(req, res = response) => {
    try{
        const { id } = req.params
        const referencia = await ReferenciaEnPedido.findByPk(id) 

        if(referencia){
            res.json(referencia)
        }else{
            res.json({
                msg:`No existe una talla con el id ${id}`
            })
        }
    }catch(error){
        console.log(error)
        res.json({
            msg: `Upps ocurrio un error`
        })
    }    
}

const postRerenciaEnPedido = async(req, res = response) =>  {    
    try{
        const {body} = req
        await ReferenciaEnPedido.create(body)
        res.json({
            msg:`La referencia fue agregada con exito.`
        })
    }catch(error){
        console.log(error)
        res.json({
            msg: `Upps ocurrio un error`
        })
    }
}

const putRefereciaEnPedido = async(req, res = response) => {    
    try{
        const {body} = req
        const {id} = req.params
        const referencia = await ReferenciaEnPedido.findByPk(id)

        if(referencia){
            await referencia.update(body)
            res.json({
                msg:`La referencia fue actualizada correctamente.`
            })
        }else{
            res.json({
                msg: `No existe una referencia con el id ${id}`
            })
        }
    }catch(error){        
        console.log(error)
        res.json({
            msg: `Upps ocurrio un problema`
        })
    }
}

const deleteRerenciaEnPedido = async(req, res = response) => {
    try{
        const {id} = req.params
        const referencia = await ReferenciaEnPedido.findByPk(id)

        if(referencia){
            await referencia.destroy()
            res.json({
                msg:`La referencia fue eliminada con exito.`
            })
        }else{
            res.status(404).json({
                msg:`No existe una referencia con el id ${id}`
            })
        }
    }catch(error){
        console.log(error)
        res.json({
            msg: `Upps ocurrio un problema`
        })
    }    
}

module.exports = {
    getReferenciasEnPedido,
    getReferenciaEnPedido,
    postRerenciaEnPedido,
    putRefereciaEnPedido,
    deleteRerenciaEnPedido
}