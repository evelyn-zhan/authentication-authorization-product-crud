import { sequelize, DataTypes } from './model.js'

const User = sequelize.define('user',
    {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        active: DataTypes.TINYINT,
        isAdmin: DataTypes.BOOLEAN,
        username: DataTypes.STRING
    }
)

export default User
