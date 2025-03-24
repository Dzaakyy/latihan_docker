import { Sequelize } from "sequelize"

const db = new Sequelize('db_crud', 'root', '', {
    host: 'host.docker.internal',
    dialect: "mysql",
    port: 3306
});

export default db;