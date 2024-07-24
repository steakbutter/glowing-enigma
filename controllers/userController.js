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

    // Get a single User
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })

            if (!user) {
                return res.status(400).json({ message: 'No user found with that id'});
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },

    // Create a user
    async createUser(req, res) {
        return res.status(200)
    },

    // Update User
    async updateUser(req, res) {
        return res.status(200)
    },

    // Delete User
    async deleteUser(req, res) {
        return res.status(200)
    },

}