const { response } = require('express')
const  ColorEnProcesoEnReferenciaEnPedido = require('../../models/pedidoModels/colorProcesoReferenciaPedidoModel')

const getColoresEnProcesoEnReferenciaEnPedido = async (req, res = response) => {
    try{
        const listColorEnProcesoEnReferenciaEnPedido = await ColorEnProcesoEnReferenciaEnPedido.findAll()

        res.json({listColorEnProcesoEnReferenciaEnPedido})
    }catch(err){
        console.log(err)
        res.json({
            msg:`Upps ocurrio un problema` 
        })
    }
}

const getColorEnProcesoEnReferenciaEnPedido = async (req, res = response) => {
    try{
        const {id} = req.params
        color = await ColorEnProcesoEnReferenciaEnPedido.findByPk(id)

        if(color){
            res.json({color})
        }else{
            res.json({
                msg:`No existe un color con el id ${id}`
            })
        }
    }catch(err){
        console.log(err)
        res.json({
            msg:`Upps ocurrio un problema`
        })
    }
}

const postColorEnProcesoEnReferenciaEnPedido = async (req, res = response) => {
    try{
        const {body} = req

        await ColorEnProcesoEnReferenciaEnPedido.create(body)
        res.json({
            msg:`El color fue creado exitosamente.`
        })
    }catch(err){
        console.log(err)
        res.json({
            msg:`Upps ocurrio un problema`
        })
    }
}

const putColorEnProcesoEnReferenciaEnPedido = async (req, res = response) => {
    try{
        const {id} = req.params
        const {body} = req

        const color = await ColorEnProcesoEnReferenciaEnPedido.findByPk(id)

        if(color){
            await color.update(body)
            res.json({
                msg:`El color fue actualizado correctamente.`
            })
        }else{
            res.json({
                msg:`No existe un color con el id ${id}`
            })
        }
    }catch(err){
        console.log(err)
        res.json({
            msg:`Upps ocurrio un problema`
        })
    }
}

const deleteColorEnProcesoEnReferenciaEnPedido = async(req, res = response) => {
    try{
        const{id} = req.params       
        const color = await ColorEnProcesoEnReferenciaEnPedido.findByPk(id) 

        if(color){
            await color.destroy()
            res.json({
                msg:`El color se elimino exitosamente.`
            })
        }else{
            res.json({
                msg:`No existe un color con el id ${id}` 
            })
        }
    }catch(err){
        console.log(err)
        res.json({
            msg:`Upps ocurrio un problema`
        })
    }
}


module.exports = {
    getColorEnProcesoEnReferenciaEnPedido,
    getColoresEnProcesoEnReferenciaEnPedido,
    postColorEnProcesoEnReferenciaEnPedido,
    putColorEnProcesoEnReferenciaEnPedido,
    deleteColorEnProcesoEnReferenciaEnPedido
}