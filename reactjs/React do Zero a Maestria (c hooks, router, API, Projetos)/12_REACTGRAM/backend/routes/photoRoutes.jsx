const express = require('express')
const router = express.Router()

// controller
const { insertPhoto, deletePhoto, getAllPhotos } = require('../controllers/photoController.jsx')

// midlewares
const { photoInsertValidation } = require('../middlewares/photoValidation.jsx')
const authGuard = require('../middlewares/authGuard.jsx')
const validate = require('../middlewares/handleValidation.jsx')
const { imageUpload } = require('../middlewares/imageUpload.jsx')

// Routes
router.post(
    "/",
    authGuard,
    imageUpload.single("image"),
    photoInsertValidation(),
    validate,
    insertPhoto
);
router.delete('/:id', authGuard, deletePhoto)
router.get('/', authGuard, getAllPhotos)

module.exports = router