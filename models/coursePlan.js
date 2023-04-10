module.exports = (sequelize, Sequelize) => {
    const CoursePlan = sequelize.define("course_plan", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        student_id: {
            type: Sequelize.UUIDV4
        },
        course_id: {
            type: Sequelize.UUIDV4
        },
    },
    {
        indexes: [
            {
                unique: true,
                fields: ['student_id', 'course_id']
            }
        ]
    });

    CoursePlan.associate = (models) => {
        CoursePlan.belongsTo(models.Student, {
            foreignKey: "student_id",
            targetKey: "id",
        });

        CoursePlan.belongsTo(models.Course, {
            foreignKey: "course_id",
            targetKey: "id",
        });
    };

    return CoursePlan;
};