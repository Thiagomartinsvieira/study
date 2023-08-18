const Photo = require("../models/Photo.jsx");
const mongoose = require("mongoose");
const User = require("../models/User.jsx");

// insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
    const { title } = req.body;
    const image = req.file.filename;

    const reqUser = req.user

    const user = await User.findById(reqUser._id)

    //create a photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name,
    })

    // if photo was created sucessfully, return data
    if (!newPhoto) {
        res.status(422).json({
            erros: ['Houve um problema, porfavor tente mais tarde.']
        })
        return
    }

    res.status(201).json(newPhoto)
}

// remove a photo from db
const deletePhoto = async (req, res) => {
    const { id } = req.parms

    const reqUser = req.user

    try {
        const photo = await Photo.findById(mongoose.Types.ObjectId(id))

        // check if photos exits
        if (!photo) {
            res.status(404).json({ erros: ['Foto não encontrada'] })
            return
        }

        // Check if photo belongs to user
        if (!photo.userId.equals(reqUser._id)) {
            res
                .status(422)
                .json({ errors: ["Ocorreu um erro, tente novamente mais tarde"] });
            return;
        }

        await Photo.findByIdAndDelete(photo._id);

        res
            .status(200)
            .json({ id: photo._id, message: "Foto excluída com sucesso." });
    } catch (error) {
        res
            .status(404)
            .json({ erros: ['Foto não encontrada'] })
        return
    }
};

// Get all photos
const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({}).sort([['createdAt', -1]]).exe()

    return res.status(200).json(photos)
}

// Get user photos
const getUserPhotos = async(req, res) => {

    const { id } = req.params

    const photos = await Photo.find({ userId: id })
        .sort([['createdAt', -1]])
        .exec()

   return res.status(200).json(photos)
}

// Get photo by id
const getPhotoByid = async(req, res) => {
    const {id} = req.params

    const photo = await Photo.findById(mongoose.Types.ObjectId(id))

    // check if photo exists
    if(!photo) {
        res.ststus(404).json({erros: ['Foto não encontrada.']})
        return
    }

    res.status(200).json(photo)
}

// update a phto
const updatePhoto = async(req, res) => {
    const {id} = req.params 
    const [title] = req.body

    const reqUser = req.user

    const photo = await Photo.findById(id)

    // check if photo exists
    if(!photo) {
        res.status(404).json({erros: ['Foto não encontrada']})
        return
    }

    // check if photo belongs to user
    if(!photo.userId.equals(reqUser._id)) {
        res.status(422).json({erros: ['Ocoreu um erro, tente novamente mais tarde.']})
        return
    }

    if(title) {
        photo.title = title
    }

    await photo.save()

    res.status(200).json({photo, message: 'Foto atualizada com sucesso'})
}

// Like functionalitty
const likePhoto = async(req, res) => {

    const {id} = req.params

    const reqUser = req.user

    const photo = await Photo.findById(id)

      // check if photo exists
      if(!photo) {
        res.status(404).json({erros: ['Foto não encontrada']})
        return
    }

    // checkk if user already liked the photo
    if(photos.likes(reqUser._id)) {
        res.ststus(422).json({erros: ['Voce ja curtiu a foto']})
        return
    }

    // Put user id in likes array
    photo.likes.push(reqUser._id)

    photo.save()

    res.status(200).json({photoId: id, userId: req._id, message: 'A foto foi curtida.'})

}

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoByid,
    updatePhoto,
    likePhoto,
}