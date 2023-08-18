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

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
}