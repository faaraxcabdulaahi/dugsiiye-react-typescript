"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    const { page = "1", limit = "10" } = req.query;
    res.json({ message: `Page ${page} with ${limit} items` });
};
exports.getProducts = getProducts;
const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    res.json({
        message: `Product ${id} updated`,
        product: { id, name, price },
    });
};
exports.updateProduct = updateProduct;
