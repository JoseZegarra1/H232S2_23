import { pool } from "../db.js";

export const renderBookings_JoseZegarra = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM HOTELVILLA");
  res.render("bookings", { bookings: rows });
};

export const createBooking_JoseZegara = async (req, res) => {
  const newBooking = req.body;
  await pool.query("INSERT INTO HOTELVILLA SET ?", [newBooking]);
  res.redirect("/");
};

export const editBooking_JoseZegara = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM HOTELVILLA WHERE ID = ?", [id]);
  res.render("bookings_edit", { booking: result[0] });
};

export const updateBooking_JoseZegarra = async (req, res) => {
  const { id } = req.params;
  const newBooking = req.body;
  await pool.query("UPDATE HOTELVILLA SET ? WHERE ID = ?", [newBooking, id]);
  res.redirect("/");
};

export const deleteBooking_JoseZegarra = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM HOTELVILLA WHERE ID = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Booking deleted" });
  }
  res.redirect("/");
};
