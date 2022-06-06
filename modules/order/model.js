const { fetch, fetchAll } = require('../../src/lib/postgres')

const ORDERS = `
    SELECT
        *
    FROM
        orders
`
const ORDERS_ONE = `
    SELECT
        *
    FROM
        orders
    WHERE
        id = $1
`
const NEW_ORDER = `
    INSERT INTO orders(client_name, client_phone) VALUES ($1, $2)
`

const EDIT_ORDER = `UPDATE orders SET client_name = $1, client_phone = $2 WHERE id = $3`

const DEL_ORDER = `
    DELETE FROM orders WHERE id = $1
`


const allOrders = () => fetchAll(ORDERS)
const ordersOne = (id) => fetchAll(ORDERS_ONE, id)
const newOrder = (client_name, client_phone) => fetchAll(NEW_ORDER, client_name, client_phone)
const editOrders = (client_name, client_phone, id) => fetchAll(EDIT_ORDER, client_name, client_phone, id)
const delOrders = (id) => fetchAll(DEL_ORDER, id)

module.exports = {
    allOrders,
    ordersOne,
    newOrder,
    editOrders,
    delOrders
}