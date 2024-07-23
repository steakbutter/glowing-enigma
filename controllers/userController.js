const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {
    // Get all Users
    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },

}