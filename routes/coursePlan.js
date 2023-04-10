const express = require ('express')
const controller = require('../controllers/coursePlan')
const validation = require('../middlewares/validation')
const router = express.Router()

router
    .post ('/', validation.coursePlan, controller.create)  
    .get ('/', controller.findAll)
    .get ('/:course_plan_id', controller.findOne)
    .put ('/:course_plan_id', validation.coursePlan, controller.update)
    .delete ('/:course_plan_id', controller.delete)

module.exports = router