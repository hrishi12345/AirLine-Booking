const {CityService} = require('../services/city-service')

const cityService=new CityService()
const create=async (req,res)=>{
    try{
        const city=await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created',
            err:{}
            
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create',
            err:error
        })
    }
}
const destroy=async (req,res)=>{
    try{
        const response=await CityService.deleteCity(req.params.id)
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully deleted',
            err:error
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete',
            err:error
        })
    }
}
const getCity=async (req,res)=>{
    try{
        const response=await cityService.getCity(req.params.id)
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully fetched data',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete data',
            err:error
        })
    }
}
const update=async (req,res)=>{
    try{
        const city=await cityService.updateCity(req.params.id,req.body)
        return res.status(200).json({
            data:response,
            success:true,
            message:'Updated successfully',
            err:{}
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update',
            err:error
        })
    }
}