const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../media/uploads'),
    filename:  (req, file, cb) => {
        cb(null, file.originalname);
        //cb(null, file.fieldname +'-'+ Date.now() +'.csv');
    }
})

exports.upload = multer({
    storage: storage,
    //limits: {fileSize: 2000000},
}).single('file')

exports.uploadFile = (req, res) => {
    console.log(req.file);
    res.send({ data: 'File sent' })
}