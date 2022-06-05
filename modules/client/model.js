const { fetch, fetchAll } = require('../../src/lib/postgres')

const CLIENTS = `
    SELECT
        *
    FROM
        clients
`
const CLIENTS_ONE = `
    SELECT
        *
    FROM
        clients
    WHERE
        id = $1
`
const NEW_CLIENT = `
    INSERT INTO clients(ismizuz, ismizru, data, photo) VALUES ($1, $2, $3, $4)
`

const EDIT_CLIENT = `UPDATE clients SET ismizuz = $1, ismizru = $2, data = $3, photo = $4 WHERE id = $5`

const DEL_CLIENT = `
    DELETE FROM car WHERE id = $1
`


const allClients = () => fetchAll(CLIENTS)
const clientsOne = (id) => fetchAll(CLIENTS_ONE, id)
const newClients = (ismizuz, ismizru, data, photo) => fetchAll(NEW_CLIENT, ismizuz, ismizru, data, photo)
const editClients = (ismizuz, ismizru, data, photo, id) => fetchAll(EDIT_CLIENT, ismizuz, ismizru, data, photo, id)
const delClients = (id) => fetchAll(DEL_CLIENT, id)

module.exports = {
    allClients,
    clientsOne,
    newClients,
    editClients,
    delClients
}