import pool from "../config/db.js"

export const Booking = async (req, res) => {
    const { id } = req.params;
    const user = req.user;
    const date = new Date();

    try {
        const response = await pool.query(`SELECT * FROM event WHERE id = $1`, [id]);
        const seatAvailability = response.rows[0];

        if (seatAvailability.available_seats > 0) {
            const PostingBooking = await pool.query(
                `INSERT INTO bookings(event_id, user_id, booking_time, number_of_tickets, total_price, payment_status, status)
                 VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
                [seatAvailability.id, user.id, date, 1, seatAvailability.price * 1, true, true]
            );

            const removeCapacity = await pool.query(
                `UPDATE event SET available_seats = $1 WHERE id = $2 RETURNING *`,
                [seatAvailability.available_seats - 1, id]
            );

            if (PostingBooking.rows.length !== 0 && removeCapacity.rows.length !== 0) {
                res.status(200).json({ message: "Ticket booked successfully" });
            } else {
                res.status(500).json({ message: "Booking failed" });
            }
        } else {
            res.status(400).json({ message: "No seat available" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Unexpected error" });
    }
}


export const getBookings =async (req,res)=>{
    const user = req.user;
    console.log(user)
    try{
        const repsonce = await pool.query(`SELECT * FROM bookings b JOIN event e ON e.id = b.event_id  WHERE b.user_id=$1`,[user.id])
        if(repsonce.rows.length === 0){
            res.status(200).json({message:"No booking Data found"})
        }
        res.status(200).json({data:repsonce.rows})
    }catch(Err){
        console.log(Err)
        res.status(500).json({message:"Unexpected error"})
    }
}