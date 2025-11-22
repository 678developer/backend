


const actorModel = require("../models/actorModel")
const errorMap = require("../utils/errorMap");

exports.getAllActors= async()=>{
    return await actorModel.getAllActors()
}



//getActorById
exports.getActorById = async (idParam) => {
  // Validación: ID debe ser entero
  if (!/^\d+$/.test(idParam)) {
    const error = new Error(errorMap.BAD_REQUEST.message);
    error.statusCode = errorMap.BAD_REQUEST.status;
    error.type = errorMap.BAD_REQUEST.type;
    throw error;
  }

  const id = parseInt(idParam, 10);
  const actor = await actorModel.getActorById(id);

  if (!actor) {
    const error = new Error(errorMap.NOT_FOUND.message);
    error.statusCode = errorMap.NOT_FOUND.status;
    error.type = errorMap.NOT_FOUND.type;
    throw error;
  }

  return actor;
};








//saveActor
exports.saveActor= async(data)=>{

   return await actorModel.saveActor(data)

}

 
/*
// CRUD básico
exports.getAllActors = asyncHandler(async (req, res) => {
  const actors = await actorModel.getAllActors();
  success(res, actors, "Actores obtenidos exitosamente");
});

exports.getActorById = asyncHandler(async (req, res) => {

  //1. BAD_REQUEST: Validando si parametro es un numero entero.
  if(!/^\d+$/.test(req.params.id)){
        const error = new Error(errorMap.BAD_REQUEST.message)
        error.statusCode= errorMap.BAD_REQUEST.status
        error.type= errorMap.BAD_REQUEST.type
        throw error
  }

  //2. NOT_FOUND: Validando que el registro existe en la tabla
  const actor = await actorModel.getActorById(parseInt(req.params.id, 10));
   
  if(!actor){
        const error = new Error(errorMap.NOT_FOUND.message)
        error.statusCode= errorMap.NOT_FOUND.status
        error.type= errorMap.NOT_FOUND.type
        throw error
  }
  
  //3. El registro fue encontrado
  success(res, actor, "Actor obtenido exitosamente");

});



exports.createActor = asyncHandler(async (req, res) => {
  const { first_name, last_name, last_update } = req.body;
  const actor = await actorModel.createActor(first_name, last_name);
  success(res, actor, "Actor creado exitosamente");
});

exports.updateActor = asyncHandler(async (req, res) => {
  const { first_name, last_name } = req.body;
  await actorModel.updateActor(req.params.id, first_name, last_name);
  success(res, null, "Actor actualizado exitosamente");
});

exports.deleteActor = asyncHandler(async (req, res) => {
  await actorModel.deleteActor(req.params.id);
  success(res, null, "Actor eliminado exitosamente");
});

// JOIN con filtro por título
exports.getActorsWithFilms = asyncHandler(async (req, res) => {
  const titleFilter = req.query.title || ""; // opcional: ?title=hawai
  const rows = await actorModel.getActorsWithFilms(titleFilter);
  success(res, rows, "Actores con películas obtenidos exitosamente");
});
*/