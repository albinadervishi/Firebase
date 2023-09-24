const express = require('express');
const {addStudent, getAllStudents, getStudent, updateStudent} = require('../controllers/studentController');

const router = express.Router();

router.post('/student', addStudent);
router.get('/students', getAllStudents);
router.get('/student/:id', getStudent);
router.put('/student/:id', updateStudent);

module.exports = {
    routes: router
}