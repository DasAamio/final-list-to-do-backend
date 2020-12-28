const AWS = require('aws-sdk');
const s3bucket = new AWS.S3({
    accessKeyId: ' ',
    secretAccessKey: ' ',
    Bucket: ' ',
    region: ' ',
    endpoint: ' '
});

module.exports = s3bucket
