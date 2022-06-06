const {
    allOrders,
    ordersOne,
    newOrder,
    editOrders,
    delOrders
} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const news = await allOrders()
            res.send(news)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const {
                client_name, client_phone
            } = req.body
            console.log(client_name, client_phone);
            await newOrder(client_name, client_phone)
            res.send('ok')
        } catch(err) {
            console.log(err.message)
        }
    },
    DELETE: async(req, res) => {
        try {
            await delOrders(req.params.id)
            res.sendStatus(200)
        } catch(err) {
            console.log(err.message)
        }
    },
    UPDATE: async(req, res) => {
        try {
            const {id} = req.params
            const {
                client_name, client_phone
            } = req.body
            await editOrders(client_name, client_phone, id)
            res.sendStatus(200)
        }catch(error){
            console.log(error.message);
        }
    },
    GET_ONE: async(req, res) => {
        try {
            const news = await ordersOne(req.params.id)
            res.send(news)
        } catch(err) {
            console.log(err.message)
        }
    }
}