const pool = require("../config/db");

// CRUD básico
exports.getAllActors = async () => {
   const query= "SELECT * FROM actor"
   const [rows] = await pool.execute(query);
   return rows;
};

exports.getActorById= async(id)=>{
  const query= "select * from actor where actor_id= ?"
  const [rows]= await pool.execute(query, [id]) 
  return rows[0]
}


exports.saveActor= async(data)=>{
  const nameColums = Object.keys(data).join(",")
  const simbolos = data.map(()=>"?").join(",")
  const valuesColumns = Object.values(data)
  const query = `insert into actor  (${nameColumns})  value (${simbolos})`
  const [result] = await pool.execute(query, valueColumns)
  return { actor_id: rows.insertId, ...data};
}

/*
exports.getActorById = async (id) => {
    const query = "SELECT * FROM actor WHERE actor_id = ?" 
    const [rows] = await pool.execute(query, [id]);
    return rows[0];
};
*/

exports.createActor = async (first_name, last_name) => {
  const query    = "INSERT INTO actor (first_name, last_name) VALUES (?, ?)"  
  const [rows] = await pool.execute(query,[first_name, last_name]);
  return { actor_id: rows.insertId, first_name, last_name };
};

exports.updateActor = async (id, first_name, last_name) => {
  await pool.execute(
    "UPDATE actor SET first_name = ?, last_name = ? WHERE actor_id = ?",
    [first_name, last_name, id]
  );
};

exports.deleteActor = async (id) => {
  await pool.execute("DELETE FROM actor WHERE actor_id = ?", [id]);
};

// Consulta con JOIN: obtener actor con sus películas
exports.getActorsWithFilms = async (titleFilter = "") => {
  const [rows] = await pool.execute(`
    SELECT 
      A.actor_id,
      CONCAT(A.first_name, ' ', A.last_name) AS full_name_actor,
      F.title AS film_title,
      F.description AS film_description,
      F.release_year AS film_release_year
    FROM actor A
    LEFT JOIN film_actor FA ON A.actor_id = FA.actor_id
    LEFT JOIN film F ON FA.film_id = F.film_id
    WHERE F.title LIKE ?
    ORDER BY full_name_actor, film_title
  `, [`%${titleFilter}%`]);
  return rows;
};
