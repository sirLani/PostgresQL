const { Router } = require("express");
const {
  getStudents,
  getStudentsById,
  addStudent,
  deleteStudentById,
} = require("./controller");

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/:id", getStudentsById);
router.delete("/:id", deleteStudentById);

module.exports = router;
