const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Parcel = sequelize.define(
  "Parcel",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_parcel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "LAO Warehouse",
    },
  },
  {
    sequelize,
    modelName: "Parcel",
    tableName: "parcels",
    timestamps: false,
  }
);

module.exports = Parcel;
