import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Role from "./Role.js";

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

User.belongsTo(Role, { foreignKey: "roleId" });

export default User;
