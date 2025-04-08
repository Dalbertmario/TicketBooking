import { response } from 'express';
import pool from '../config/db.js';

export const DashData = async(req,res)=>{

    try{ 
      const responce = await pool.query(`SELECT * FROM event`)
      if(!responce.rows.length === 0 ){
        res.status(404).json({message:"Data not found for dash"})
      }
    
      res.status(200).json({data:responce.rows,message:"Data fetched successfully"})
    }catch(err){
       console.log(err.message)
       res.status(500).json({message:"Unexpected error"})
    }
}

export const bookingDetailsPage = async(req,res)=>{
  const {id} = req.params
  try{
      const responce = await pool.query(`SELECT * FROM event WHERE id=$1`,[id])
      if(responce.rows.length === 0){
        res.status(400).json({message:'No event found'})
      }
      res.status(200).json({data:responce.rows})
  }catch(er){
    console.log(er.message)
    res.status(500).json({message:"Unexpected error"})
  }
}


export const filtering = async (req, res) => {
  const { fil } = req.params;
  console.log(fil)
  const tags = [];

  try {
    const responce = await pool.query(`SELECT * FROM event`);

    if (responce.rows.length === 0) {
      return res.status(404).json({ message: 'No data found' }); 
    }

    for (let i = 0; i < responce?.rows?.length; i++) {
      if (!tags.includes(responce.rows[i].tags)) {
        tags.push(responce.rows[i].tags);
      }
    }
    const data = fil && fil !== 'undefined' && fil !== 'null'
  ? responce.rows.filter(el => el.tags === fil)
  : responce.rows;

    res.status(200).json({
      data: data,
      tags: tags,
      message: "Data fetched successfully"
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Unexpected error occurred" });
  }
};
