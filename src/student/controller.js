const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentsById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const deleteStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("student does not exist in the database");
    }
  });

  pool.query(queries.removeStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (error) throw error;
    res.status(200).send("student has been deleted");
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  if (!email) {
    return res.status(400).json({ message: `email has to be filled` });
  }
  if (!name) {
    return res.status(400).json({ message: `name has to be filled` });
  }
  if (!dob) {
    return res.status(400).json({ message: `dob has to be filled` });
  }

  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email exists");
    }

    // store student
    pool.query(
      queries.addStudent,
      [name, email, age, dob],
      (error, results) => {
        if (error) throw error;
        res.status(200).send("student has been sccessfully created");
      }
    );
  });
};

module.exports = {
  getStudents,
  getStudentsById,
  addStudent,
  deleteStudentById,
};
