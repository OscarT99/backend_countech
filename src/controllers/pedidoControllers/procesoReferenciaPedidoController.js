const { response } = require('express')
const  ProcesoEnReferenciaEnPedido = require('../../models/pedidoModels/procesoReferenciaPedidoModel')


const getProcesosEnReferenciaEnPedido = async (req, res = response) => {
    try{
        const listProcesoEnReferenciaEnPedido = await ProcesoEnReferenciaEnPedido.findAll()
        res.json({listProcesoEnReferenciaEnPedido})        
    }catch(err){
        console.log(err)
        res.json({
            msg:`Upps ocurrio un problema`
        })
    }
}

const getProcesoEnReferenciaEnPedido = async (req, res = response) => {    
    try{
        const {id} = req.params
        const proceso = await ProcesoEnReferenciaEnPedido.findByPk(id)

        if(proceso){
            res.json({proceso})
        }else{
            res.json({
                msg:`No existe ningun proceso con el id ${id}`
            })
        }
    }catch(err){
        console.log(err)
        res.json({
            msg:`Upps ocurrio un problema` 
        })
    }

}

const postProcesoEnReferenciaEnPedido = async (req, res = response) => {    
    try{
        const {body} = req

        await ProcesoEnReferenciaEnPedido.create(body)
        res.json({
            msg:`El proceso fue creado exitosamente.`
        })
    }catch(err){
        console.log(err)        
        res.json({            
            msg:`Upps ocurrio un problema.`
        })
    }
}

const putProcesoEnReferenciaEnPedido = async (req, res = response) => {    
    try{
        const {id} = req.params
        const {body} = req

        proceso = await ProcesoEnReferenciaEnPedido.findByPk(id)

        if(proceso){
            await proceso.update(body)
            res.json({
                msg:`El proceso fue actualizado correctamente.`
            })
        }else{
            res.json({
                msg:`No existe un proceso con el id ${id}`
            })
        }
    }catch(err){
        console.log(err)
        res.json({
            msg:`Upps ocurrio un problema`
        })
    }
}

const deleteProcesoEnReferenciaEnPedido = async(req, res = response)=>{
    try{
        const {id} = req.params
        const proceso = await ProcesoEnReferenciaEnPedido.findByPk(id)
        
        if(proceso){
            await proceso.destroy()
            res.json({
                msg:`El proceso fue eliminado exitosamente.`
            })
        }else{
            res.json({
                msg: `No existe un proceso con el id ${id}`
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
    getProcesoEnReferenciaEnPedido,
    getProcesosEnReferenciaEnPedido,
    postProcesoEnReferenciaEnPedido,
    putProcesoEnReferenciaEnPedido,
    deleteProcesoEnReferenciaEnPedido
}