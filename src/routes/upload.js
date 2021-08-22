const { Router } = require('express');
const controller = require('../controllers/upload')

const router = Router();

router.post(
    '/',
    controller.upload,
    controller.uploadFile
)

module.exports = router