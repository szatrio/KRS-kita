const db = require("../models");
const Student = db.student;

// Create and Save a new Student
exports.create = (req, res) => {

    // Create a Student
    const student = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    };

    // Save Student in the database
    Student.create(student)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Student."
        });
    });
};

// Find All Student
exports.findAll = (_, res) => {
    Student.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving students."
        });
    });
};

// Find One Student
exports.findOne = (req, res) => {
    const id = req.params.student_id;
  
    Student.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Student with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Student with id=" + id
        });
    });
};

// Update One Student
exports.update = (req, res) => {
    const id = req.params.student_id;
  
    Student.update(req.body, {
      where: { id: id }
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Student was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
          });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Student with id=" + id
        });
    });
};

// Delete One Student
exports.delete = (req, res) => {
    const id = req.params.student_id;
  
    Student.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Student was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
             message: "Could not delete Student with id=" + id
        });
    });
};