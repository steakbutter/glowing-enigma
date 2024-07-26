//  const { ObjectId } = require('mongoose').Types;
const {Thought, User } = require('../models');

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
            .populate('thoughts')
            .populate('friends')
            if (!user) {
                return res.status(400).json({ message: 'No user found with that id'});
            }
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },

    // Create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    // Delete User
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            if (!user) {
                return res.status(400).json({ message: 'No user found with that id'})
            }

            await Thought.deleteMany({ _id: { $in: user.thoughts }})
            res.json({ message: 'User and thoughts deleted.'});
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Update User
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                {$set: req.body},
                {new: true}
             );
            if(!user) {
                return res.status(400).json({ message: 'No user found with that id'})
            }
            res.json({ message: 'User succesfully updated'});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Add a friend
    async addFriend(req, res) {
        try {
            console.log('Adding a friend');
            console.log(req.body);
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                { $addToSet: {friends: req.body }},
                { runValidators: true, new: true }
            );
            if (!user) {
                return res.status(400).json({ message: 'No user found with that id'});
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}