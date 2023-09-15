const { Pool } = require('pg')

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "postgres",
    port: 5432,
    database: "postgres"
})

const getPets = async (req, res) => {    
    const response = await pool.query('Select * from demopets.pet');
    res.status(200).json(response.rows); 
};

const getPetById = async (req, res) => {    
    const id = req.params.id;
    console.log('getting pet ' + id);
    const response = await pool.query('Select * from demopets.pet where id = $1', [id]);
    res.status(200).json(response.rows);     
};

const createPets = async (req, res) => {   
    const { name, owner_id } = req.body;
    const response = await pool.query('Insert into demopets.pet (name, owner_id) values ($1, $2)', [name, owner_id]);
    console.log(response);
    res.status(200).json({
        message: 'Pet added',
        body: {
            pet: {name, owner_id}
        }
    });
}

const updatePets = async (req, res) => {   
    const id = req.params.id;
    const { name, owner_id } = req.body;
    console.log('updating pet ' + id + ' with data:' + name + ', ' + owner_id);
    const response = await pool.query('Update demopets.pet set name=$2, owner_id=$3 where id = $1', [id, name, owner_id]);

    console.log(response);
    res.status(200).json({
        message: 'Pet updated',
        body: {
            pet: {name, owner_id}
        }
    });
}

const deletePet = async (req, res) => {   
    const id = req.params.id;
    console.log('deleteing pet ' + id);
    const response = await pool.query('Delete from demopets.pet where id = $1', [id]);

    console.log(response);
    res.status(200).json({
        message: 'Pet ' + id + ' deleted'        
    });
}

module.exports = {
    getPets, 
    getPetById, 
    createPets,
    updatePets,
    deletePet
}