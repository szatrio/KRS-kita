const validator = require('../helpers/validate')

const student = async (req, res, next) => {
    const validationRule = {
        "name": "required|string",
        "email": "required|string|email",
        "phone": "required|string",
        "address": "required|string",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}

const course = async (req, res, next) => {
    const validationRule = {
        "name": "required|string",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}

const coursePlan = async (req, res, next) => {
    const validationRule = {
        "student_id": "required|string|checkStudent:CoursePlan,student_id",
        "course_id": "required|string|checkCourse:CoursePlan,course_id",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}

module.exports = {
    student,
    course,
    coursePlan
};