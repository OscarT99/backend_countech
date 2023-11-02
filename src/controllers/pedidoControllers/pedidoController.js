const {response} = require('express')
const Pedido = require('../../models/pedidoModels/pedidoModel')

const getPedidos = async(req, res = response) => { 
    try{
        const listPedidos = await Pedido.findAll()
        res.json({listPedidos})
    }catch(error){
        console.log(error)
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }       
}

const getPedido =async(req, res = response)=>{
    try{
        const {id} = req.params
        const pedido = await Pedido.findByPk(id)

        if(pedido){
            res.json(pedido)
        }else{
            res.json({
                msg:`No existe una talla con el id ${id}`
            })
        }
    }catch(error){
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }    
}

const postPedido = async (req, res = response) => {    
    try{
        const {body} = req
        await Pedido.create(body)
        res.json({
            msg:`El Pedido fue agregado con exito.`
        })
    }catch(error){
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }
}

const putPedido = async (req, res = response)=>{    
    try{
        const {body} = req 
        const {id} = req.params
        const pedido = await Pedido.findByPk(id)

        if(pedido){
            await pedido.update(body)
            res.json({
                msg:`El pedido fue actualizado correctamente.`
            })
        }else{
            res.status(404).json({
                msg:`No existe un pedido con el id ${id}`
            })
        }
    }catch(error){
        console.log(error)
        res.json({
            msg:`Upps ocurrio un error`
        })
    }
}


const deletePedido = async(req,res =response) => {
    try{
        const {id} = req.params
        const pedido = await Pedido.findByPk(id)

        if(pedido){
            await pedido.destroy()
            res.json({
                msg:`El pedido fue eliminado con exito.`
            })
        }else{
            res.status(404).json({
                msg: `No existe un pedido con el id ${id}` 
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
    getPedido,
    getPedidos,
    postPedido,
    putPedido,
    deletePedido
}