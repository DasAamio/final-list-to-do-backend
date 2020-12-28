const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

const ProjectSchema = new Schema({
    title: String,
    description: String,
    isImportant: String,
    deadline:Number,
    tasks:[{
        taskname: String,
        status: {
            type: String,
            default:'ongoing'
        }
    }],
    status: {
        type: String,
        default:'ongoing'
    },
    isdelete: {
        type: String,
        default:'No'
    }
})

ProjectSchema.plugin(timestamps);
ProjectSchema.index({ createdAt: 1, updatedAt: 1 });
module.exports = mongoose.model("Project",ProjectSchema);
