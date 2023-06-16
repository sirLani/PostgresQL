const { Router } = require("express");
const {
  getStudents,
  getStudentsById,
  addStudent,
  deleteStudentById,
  updateStudentById,
} = require("./controller");

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/:id", getStudentsById);
router.delete("/:id", deleteStudentById);
router.put("/:id", updateStudentById);

module.exports = router;
