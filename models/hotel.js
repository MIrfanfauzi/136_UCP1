module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define('hotel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    judul: {
        type: DataTypes.STRING,
        allowNull: false
    },
    penulis: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    }, {
        tableName: 'hotel',
        freezeTableName: true,
        timestamps: true
    });
    return Hotel;
};