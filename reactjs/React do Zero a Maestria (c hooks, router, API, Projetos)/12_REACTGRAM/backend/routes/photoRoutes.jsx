const express = require('express')
const router = express.Router()

// controller
const { insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotoByid, updatePhoto } = require('../controllers/photoController.jsx')

// midlewares
const { photoInsertValidation, photoUpdateValidation } = require('../middlewares/photoValidation.jsx')
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
router.get('/user/:id', authGuard, getUserPhotos)
router.get('/:id', authGuard, getPhotoByid)
router.put('/:id',authGuard, photoUpdateValidation(), validate, updatePhoto)

module.exports = router