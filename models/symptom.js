import Sequelize from "sequelize";

module.exports = class Symptom extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        departmentName: {
          type: Sequelize.STRING(100),
        },
        symptomName: {
          type: Sequelize.STRING(100),
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Symptom",
        tableName: "symptom",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
