const db = require("../models");
const Course = db.course;

// Create and Save a new Course
exports.create = (req, res) => {

    // Create a Course
    const course = {
        name: req.body.name
    };

    // Save Course in the database
    Course.create(course)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Course."
        });
    });
};

// Find All Course
exports.findAll = (_, res) => {
    Course.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving courses."
        });
    });
};

// Find One Course
exports.findOne = (req, res) => {
    const id = req.params.course_id;
  
    Course.findByPk(id)
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
            message: "Error retrieving Course with id=" + id
        });
    });
};

// Update One Course
exports.update = (req, res) => {
    const id = req.params.course_id;
  
    Course.update(req.body, {
      where: { id: id }
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Course was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Course with id=${id}. Maybe Course was not found or req.body is empty!`
          });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Course with id=" + id
        });
    });
};

// Delete One Course
exports.delete = (req, res) => {
    const id = req.params.course_id;
  
    Course.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Course was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Course with id=${id}. Maybe Course was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Course with id=" + id
        });
    });
};