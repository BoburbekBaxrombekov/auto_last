const {
    allClients,
    clientsOne,
    newClients,
    editClients,
    delClients
} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const news = await allClients()
            res.send(news)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const {
                ismizuz, ismizru, data
            } = req.body
            const photo = `https://auto012.herokuapp.com//public/image/${req.file.filename}`
            await newClients(ismizuz, ismizru, data, photo)
            res.send('ok')
        } catch(err) {
            console.log(err.message)
        }
    },
    DELETE: async(req, res) => {
        try {
            await delClients(req.params.id)
            res.sendStatus(200)
        } catch(err) {
            console.log(err.message)
        }
    },
    UPDATE: async(req, res) => {
        try {
            const {id} = req.params
            const {
                ismizuz, ismizru, data, photo
            } = req.body
            await editClients(ismizuz, ismizru, data, photo, id)
            res.sendStatus(200)
        }catch(error){
            console.log(error.message);
        }
    },
    GET_ONE: async(req, res) => {
        try {
            const news = await clientsOne(req.params.id)
            res.send(news)
        } catch(err) {
            console.log(err.message)
        }
    }
}