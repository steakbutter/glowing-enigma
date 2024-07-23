const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
          virtuals: true,  
          getters: true,
        },
          id: false,
      }
);

// Virtual properties:
thoughtSchema.virtual('formattedCreatedAt').get(function() {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}
    return this.createdAt.toLocaleDateString('en-Us', options);
});
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;