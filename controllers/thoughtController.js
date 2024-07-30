const {Thought, User } = require('../models');

module.exports = {
    //Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find()
            res.json(thoughts);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get a single thought
    async getSingleThought(req, res) {
        try {
            const thoughts = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thoughts) {
                return res.status(400).json({ message: 'No thought with that id'});
            }
            res.status(200).json(thoughts);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    // Create a thought
    async createThought(req, res) {
        try {
            const thoughts = await Thought.create(req.body);
            const userThought = await User.findOneAndUpdate(
                { _id: req.body.userId},
                { $push: { thoughts: thoughts._id }},
                { new: true }
            )
            console.log(userThought);
            if(!userThought) {
                return res.status(400).json({ message: 'couldnt add thought to user' });
            }
            res.json({ ...thoughts, message: 'Added thought to user ' });
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // Delete thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(400).json({ message: 'No thought with that id'});
            }
            res.status(200).json({ message: 'thought deleted.'});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                {$set: req.body},
                {new: true}
            );
            if (!thought) {
                return res.status(400).json({ message: 'No thought with that id'});
            }
            res.status(200).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // add a reaction
    async addReaction(req,res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                { $addToSet: {reactions: req.body } },
                { new: true }
            );
            if (!reaction) {
                return res.status(400).json({message: 'no thought found with that id'});
            }
            res.json(reaction);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    
    }
