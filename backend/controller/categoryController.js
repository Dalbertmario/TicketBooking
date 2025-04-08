import pool from "../config/db.js"

export const category = async (req,res)=>{
const {cat} = req.params
console.log(cat)
    try{
        const responce = await pool.query(`SELECT * FROM event WHERE tags=$1`,[cat])
        if(responce.rows[0].length === 0){
            res.status(404).json({message:"Coming Soon"})
        }
        res.status(200).json({data:responce.rows})
    }catch(err){
       res.status(500).json({message:"Unexpected erro"})
    }
}
