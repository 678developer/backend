
const express=require('express')
const actorController= require('../controllers/actorController') 
const router=express.Router()


//consultas básicas
router.get("/",        actorController.getAllActors) 
router.get("/:id", actorController.getActorById)

router.post("/", actorController.saveActor)


/*
//Probando cada una de la rutas
//----------------------------------------------
router.get("/", (req, res)=> {res.json({mensaje: "Get all actor"})})
router.get("/:id", (req, res)=> {const {id}=req.params; res.send({id})})
router.post("/", (req, res)=> {const {aa,bb}= req.body; res.json({aa, bb})})
router.put("/:id", (req, res)=> {res.send("mensaje: res.params.id")})
router.delete("/:id", (req, res)=> {res.json({mensaje: "borrando ${id}"})})
*/

   

/*
router.get("/:id",     actorController.getActorById)
router.post("/",       actorController.createActor)
router.put("/:id",     actorController.updateActor)
router.delete("/:id",  actorController.deleteActor)
*/
module.exports= router
