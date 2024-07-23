const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default:Date.now,
        }
    },
    {
        toJSON: {
          virtuals: true,  
          getters: true,
        },
        id: false,
      }
);

// Virtual property
reactionSchema.virtual('formattedCreatedAt').get(function() {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}
    return this.createdAt.toLocaleDateString('en-Us', options);
});

module.exports = reactionSchema;