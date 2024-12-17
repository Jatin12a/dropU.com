const mongoose = require('mongoose');

const blacklistSchema = new mongoose.Schema(
    {
        token: {
            type: String,
            required: true,
            unique: true, 
        },
    },
    {
        timestamps: true, 
    }
);


blacklistSchema.index({ createdAt: 1 }, { expireAfterSeconds: 12 * 60 * 60 }); 

const Blacklist = mongoose.model('Blacklist', blacklistSchema);

module.exports = Blacklist;
