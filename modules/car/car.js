const {
    allCarss,
    carsOne,
    newCars,
    editCars,
    delCars
} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const news = await allCarss()
            res.send(news)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const {
                    madel, marka, color, yili, divigitel, yoqilgi, transmission, kuzuv, perevod, yurgani, narxi, aksiya, opisaniya, ismiz, gmail
            } = req.body
            const photo = `https://auto012.herokuapp.com//public/image/${req.file.filename}`
            await newCars(madel, marka, color, yili, divigitel, yoqilgi, transmission, kuzuv, perevod, yurgani, narxi, aksiya, opisaniya, ismiz, gmail, photo)
            res.send('ok')
        } catch(err) {
            console.log(err.message)
        }
    },
    DELETE: async(req, res) => {
        try {
            await delCars(req.params.id)
            res.sendStatus(200)
        } catch(err) {
            console.log(err.message)
        }
    },
    UPDATE: async(req, res) => {
        try {
            const {id} = req.params
            const {
                madel, marka, color, yili, divigitel, yoqilgi, transmission, kuzuv, perevod, yurgani, narxi, aksiya, opisaniya, ismiz, gmail, photo
            } = req.body
            await editCars(madel, marka, color, yili, divigitel, yoqilgi, transmission, kuzuv, perevod, yurgani, narxi, aksiya, opisaniya, ismiz, gmail, photo, id)
            res.sendStatus(200)
        }catch(error){
            console.log(error.message);
        }
    },
    GET_ONE: async(req, res) => {
        try {
            const news = await carsOne(req.params.id)
            res.send(news)
        } catch(err) {
            console.log(err.message)
        }
    }
}