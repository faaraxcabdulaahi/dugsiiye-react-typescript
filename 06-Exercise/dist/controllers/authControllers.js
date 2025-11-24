"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const loginUser = (req, res) => {
    const { email } = req.body;
    res.json({ message: `Logged in as ${email}` });
};
exports.loginUser = loginUser;
