// const pool = require("./db");

// const getUsers = (req, res) => {
//   pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   });
// };

// const getUserById = (req, res) => {
//   const id = parseInt(req.params.id);

//   pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   });
// };

// const createUser = (req, res) => {
//   const { username, fullname, email, password } = req.body;

//   pool.query(
//     "INSERT INTO users (username, fullname, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
//     [username, fullname, email, password],
//     (error, results) => {
//       if (error) throw error;
//       res.status(201).send(`User added with ID: ${results.rows[0].id}`);
//     }
//   );
// };

// const updateUser = (req, res) => {
//   const id = parseInt(req.params.id);
//   const { username, email } = req.body;

//   pool.query(
//     "UPDATE users SET username = $1, email = $2 WHERE id = $3",
//     [username, email, id],
//     (error, results) => {
//       if (error) throw error;
//       res.status(200).send("User modified with ID " + id);
//     }
//   );
// };

// const deleteUser = (req, res) => {
//   const id = parseInt(req.params.id);

//   pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
//     if (error) throw error;
//     res.status(200).send(`User deleted with ID: ${id}`);
//   });
// };

// module.exports = {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// };
