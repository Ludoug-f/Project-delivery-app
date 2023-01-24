"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("salesProducts", {
            saleId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: "sales", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                foreignKey: true,
                field: "sale_id",
            },
            productId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: "products", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                foreignKey: true,
                field: "product_id",
            },
            quantity: {
                type: Sequelize.INTEGER,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("SalesProducts");
    }
};