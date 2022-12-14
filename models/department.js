import { Sequelize } from "sequelize";

module.exports = class department extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        deptEng: {
          type: Sequelize.STRING(100),
        },
        deptKor: {
          type: Sequelize.STRING(100),
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Department",
        tableName: "department",
        freezeTableName: true,
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
