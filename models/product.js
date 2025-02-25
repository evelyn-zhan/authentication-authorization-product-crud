import { sequelize, DataTypes } from './model.js'

const Product = sequelize.define('product',
    {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER
    }, {
        timestamps: false
    }
)

export default Product