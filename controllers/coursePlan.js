const db = require("../models");
const CoursePlan = db.coursePlan;
const Op = db.Sequelize.Op;

// Create and Save a new Course Plan
exports.create = (req, res) => {

    // Create a Course Plan
    const coursePlan = {
        student_id: req.body.student_id,
        course_id: req.body.course_id,
    };

    // Save Course Plan in the database
    CoursePlan.create(coursePlan)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Course Plan."
        });
    });
};

// Find All Course Plan
exports.findAll = (_, res) => {
    CoursePlan.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving courses Plan."
        });
    });
};

// Find One Course Plan
exports.findOne = (req, res) => {
    const id = req.params.course_plan_id;
  
    CoursePlan.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Course with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Course Plan with id=" + id
        });
    });
};

// Update One Course Plan
exports.update = (req, res) => {
    const id = req.params.course_plan_id;
  
    CoursePlan.update(req.body, {
      where: { id: id }
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Course Plan was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot Plan update Course with id=${id}. Maybe Course was not found or req.body is empty!`
          });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Course Plan with id=" + id
        });
    });
};

// Delete One Course Plan
exports.delete = (req, res) => {
    const id = req.params.course_plan_id;
  
    CoursePlan.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Course Plan was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot Plan delete Course with id=${id}. Maybe Course was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Course Plan with id=" + id
        });
    });
};