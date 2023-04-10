const express = require ('express')
const controller = require('../controllers/course')
const validation = require('../middlewares/validation')
const router = express.Router()

router
    .post ('/', validation.course, controller.create)  
    .get ('/', controller.findAll)
    .get ('/:course_id', controller.findOne)
    .put ('/:course_id', validation.course, controller.update)
    .delete ('/:course_id', controller.delete)

module.exports = router