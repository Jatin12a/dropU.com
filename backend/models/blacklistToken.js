const mongoose = require('mongoose');

// Define schema for blacklisting tokens
const blacklistSchema = new mongoose.Schema(
    {
        token: {
            type: String,
            required: true,
            unique: true, // Ensures no duplicate tokens are stored
        },
    },
    {
        timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
    }
);

// Add TTL index to remove documents after 12 hours
blacklistSchema.index({ createdAt: 1 }, { expireAfterSeconds: 12 * 60 * 60 }); // 12 hours in seconds

const Blacklist = mongoose.model('Blacklist', blacklistSchema);

module.exports = Blacklist;
