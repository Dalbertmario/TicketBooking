import bcrypt from 'bcrypt';
import pool from '../config/db.js';
import JWT from 'jsonwebtoken';

// Sign Up Controller
export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const checkIfUserExist = await pool.query(
      `SELECT * FROM users WHERE name = $1`,
      [name]
    );

    if (checkIfUserExist.rows.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }

    const response = await pool.query(
      `INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *`,
      [name, email, hashedPassword]
    );

    const user = response.rows[0];

    res.status(201).json({
      message: "User successfully created",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: "Unexpected error" });
  }
};

// Sign In Controller
export const signIn = async (req, res) => {
  const { name, password } = req.body;
  try {
    const response = await pool.query(
      `SELECT * FROM users WHERE name = $1`,
      [name]
    );

    if (response.rows.length === 0) {
      return res.status(400).json({ message: "User account not found" });
    }

    const user = response.rows[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = JWT.sign(
      { id: user.id, username: user.name },
      process.env.JWT_TOKEN,
    );

    res.status(200).json({
      token,
      message: "User successfully signed in",
    });
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: "Unexpected error" });
  }
};


export const getProfile = async (req,res)=>{
    const users = req.user
    try{
        const bookingData = await pool.query(`SELECT * FROM users WHERE id=$1`,[users.id])
        if(bookingData.rows.length === 0 ){
            res.status(200).json({message:'No bookings'})
        }
        res.status(200).json({data:bookingData,userData:users})
    }catch(er){
        console.log(err.message)
        res.status(500).json({message:"Unexpected error"})
    }
}

export const userData = async(req,res)=>{
  const user = req.user
  try{
     const responce = await pool.query(`SELECT * FROM users WHERE id=$1`,[user.id])
     console.log(responce.rows)
     if(responce.rows.length ===0){
      res.status(404).json({message:"Data not found"})
     }
     res.status({data:responce})
  }catch(er){
      res.status(500).json({message:"Unexpected error"})
  } 
}