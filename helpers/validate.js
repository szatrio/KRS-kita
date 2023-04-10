const Validator = require('validatorjs');
const Models = require("../models")

const validator = async (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

Validator.registerAsync('checkStudent', function(value, attribute, req, passes) {    
    let msg = "Student takes max 3 courses"

    Models.coursePlan.count({
        where: {
             student_id: value
        }
    })
    .then((result) => {
        if(result >= 3){
            passes(false, msg);
        }
        passes();
    })
});

Validator.registerAsync('checkCourse', function(value, attribute, req, passes) {    
    let msg = "Course max taken by 4 students"

    Models.coursePlan.count({
        where: {
             course_id: value
        }
    })
    .then((result) => {
        if(result >= 4){
            passes(false, msg);
        }
        passes();
    })
});


module.exports = validator;