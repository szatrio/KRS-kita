const express = require ('express')
const controller = require('../controllers/student')
const validation = require('../middlewares/validation')
const router = express.Router()

router
    .post ('/', validation.student, controller.create)  
    .get ('/', controller.findAll)
    .get ('/:student_id', controller.findOne)
    .put ('/:student_id', validation.student, controller.update)
    .delete ('/:student_id', controller.delete)

module.exports = router