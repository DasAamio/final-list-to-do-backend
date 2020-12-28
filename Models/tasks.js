const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');


const taskSchema = new Schema({
    parenttype: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    taskname: String,
    status: {
        type: String,
        default:'ongoing'
    }
})

taskSchema.plugin(timestamps);
taskSchema.index({ createdAt: 1, updatedAt: 1 });
module.exports = mongoose.model("Task",taskSchema);
