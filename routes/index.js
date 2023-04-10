const express = require ('express');
const student = require ('./student');
const course = require ('./course');
const coursePlan = require ('./coursePlan');

const router = express.Router ();

router.use ('/student', student);
router.use ('/course', course);
router.use ('/course-plan', coursePlan);

module.exports = router;