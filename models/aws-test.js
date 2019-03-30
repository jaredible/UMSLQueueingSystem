const multer = require('multer');
const multerS3 = require('multer-s3');

const BUCKET_NAME = 'umsl-aqs';
const ACCESS_KEY = process.env.ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;

console.log(ACCESS_KEY);
console.log(SECRET_ACCESS_KEY);

// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

// Create S3 service object
const S3 = new AWS.S3({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: 'us-east-1'
});

const upload = multer({
  storage: multerS3({
    s3: S3,
    bucket: BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, {
        fieldName: file.fieldname
      });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
