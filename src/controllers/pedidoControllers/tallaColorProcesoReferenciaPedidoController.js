const {response} = require('express')
const TallaEnColorEnProcesoEnReferenciaEnPedido = require('../../models/pedidoModels/tallaColorProcesoReferenciaPedidoModel')

const getTallasEnColorEnProcesoEnReferenciaEnPedido = async (req, res = response) => {
    try{
        const listTallaEnColorEnProcesoEnReferenciaEnPedido = await TallaEnColorEnProcesoEnReferenciaEnPedido.findAll()
        res.json({listTallaEnColorEnProcesoEnReferenciaEnPedido})
    }catch(err){
        console.log(err)
        res.json({
            msg:`Upps ocurrio un problema`
        })
    }
}

const getTallaEnColorEnProcesoEnReferenciaEnPedido = async(req, res = response)=>{
    try{
        const {id} = req.params
        const talla = await TallaEnColorEnProcesoEnReferenciaEnPedido.findByPk(id)

        if(talla){
            res.json({talla})
        }else{
            res.json({
                msg:`No existe una talla con el id ${id}`
            })
        }
    }catch(err){
        console.log(err)
        res.json({
            msg:`Upps ocurrio un problema`
        })
    }
}

const postTallaEnColorEnProcesoEnReferenciaEnPedido = async(req, res = response) => {
    try{
        const {body} = req

        await TallaEnColorEnProcesoEnReferenciaEnPedido.create(body)
        res.json({
            msg:`La talla fue creada exitosamente.`
        })
    }catch(err){
        console.log(err)
        res.json({
            msg:`Upps ocurrrio un problema`
        })
    }
}

const putTallaEnColorEnProcesoEnReferenciaEnPedido = async(req, res = response) =>{
    try{
        const {id} = req.params
        const {body} = req
        const talla = await TallaEnColorEnProcesoEnReferenciaEnPedido.findByPk(id)

        if(talla){
            await talla.update(body)
            res.json({
                msg:`La talla fue actualizada exitosamente.`
            })
        }else{
            res.json({
                msg:`No existe una talla con el id ${id}`
            })
        }
    }catch(err){
        console.log(err)
        res.json({
            msg:`Upps ocurrio un problema `
        })
    }
}

const deleteTallaEnColorEnProcesoEnReferenciaEnPedido = async(req, res = response) =>{
    try{
        const {id} = req.params
        const talla = await TallaEnColorEnProcesoEnReferenciaEnPedido.findByPk(id)

        if(talla){
            await talla.destroy()
            res.json({
                msg:`La talla fue elimanda exitosamente.`
            })
        }else{
            res.json({
                msg:`NO existe una talla con el id ${id}`
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
    getTallaEnColorEnProcesoEnReferenciaEnPedido,
    getTallasEnColorEnProcesoEnReferenciaEnPedido,
    postTallaEnColorEnProcesoEnReferenciaEnPedido,
    putTallaEnColorEnProcesoEnReferenciaEnPedido,
    deleteTallaEnColorEnProcesoEnReferenciaEnPedido
}