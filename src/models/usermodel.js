import pool from "../config/db.js";

export const getALLuserService = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};
export const getUserByIdservice = async (id) => {
  const result = await pool.query("SELECT * FROM users where id=$1", [id]);
  return result.rows[0];
};
export const CreateUserService = async (name, email) => {
  const result = await pool.query(
    "INSERT INTO users (name,email) Values ($1,$2) RETURNING *",
    [name, email]
  );
  return result.rows[0];
};
export const updateUsserService = async (id, name, email) => {
  const result = await pool.query(
    "UPDATE  users  SET name=$1, email=$2 where id=$3 RETURNING *",
    [name, email, id]
  );
  return result.rows[0];
};
export const deleteUserService = async (id) => {
  const result = await pool.query(
    "DELETE  FROM users where id=$1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
