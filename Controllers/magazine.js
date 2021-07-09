const Magazine = require('../Models/magazine')

const createMagazine = (req, res) => {
    let newMagazine = new Magazine(req.body)
    newMagazine.save((err, magazine) => {
        if (err)
            res.json({ status: 400, error: err })
        else
            res.json({ status: 200, result: magazine })
    })
}

const getMagazineById = async (req, res) => {
    try {
        let magazine = await Magazine.findById(req.params.magazineId)
        res.json({ status: 200, result: magazine })
    } catch (err) {
        res.json({ status: 400, error: err })
    }
}

const getAllMagazines = async (req, res) => {
    try {
        let magazines = await Magazine.find().populate('user')
        res.json({ status: 200, result: magazines })
    } catch (err) {
        console.log(err);
        res.json({ status: 400, error: err })
    }
}

const updateMagazine = async (req, res) => {
    try {
        let magazine = await Magazine.findByIdAndUpdate(req.body._id, req.body, { new: true })
        res.json({ status: 200, result: magazine })
    } catch (err) {
        res.json({ status: 400, error: err })
    }
}

const deleteMagazine = async (req, res) => {
    try {
        Magazine.findByIdAndDelete(req.params.magazineId)
        res.json({ status: 200, message: "successfully deleted" })
    } catch (err) {
        res.json({ status: 400, error: err })
    }
}
module.exports = {
    createMagazine,
    getAllMagazines,
    getMagazineById,
    updateMagazine,
    deleteMagazine
}