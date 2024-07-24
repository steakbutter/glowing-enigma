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
            const thoughts = await Thought.findOne({ _id: req.params.thoughtId })
            if (!thoughts) {
                return res.status(400).json({ message: 'No thought with that id'});
            }
            res.json(thoughts)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    // Create a thought
    async createThought(req, res) {
        
    }
}