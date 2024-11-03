
const { Pool } =require("pg");

const pool=new Pool({
    host: 'localhost',
    database: 'training_db',
   password:"shameel786",
   port:5432,
   user:"training_user"
  })

module.exports=pool;
 