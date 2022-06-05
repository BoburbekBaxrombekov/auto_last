const { fetch, fetchAll } = require('../../src/lib/postgres')

const CARS = `
    SELECT
        *
    FROM
        car
`
const CARS_ONE = `
    SELECT
        *
    FROM
        car
    WHERE
        id = $1
`
const NEW_CAR = `
    INSERT INTO car(madel, marka, color, yili, divigitel, yoqilgi, transmission, kuzuv, perevod, yurgani, narxi, aksiya, opisaniya, ismiz, gmail, photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
`

const EDIT_CARS = `UPDATE car SET madel = $1, marka = $2, color = $3, yili = $4, divigitel = $5, yoqilgi = $6, transmission = $7, kuzuv = $8, perevod = $9, yurgani = $10, narxi = $11, aksiya = $12, opisaniya = $13, ismiz = $14 , gmail = $15, photo = $16 WHERE id = $17`

const DEL_CARS = `
    DELETE FROM car WHERE id = $1
`


const allCarss = () => fetchAll(CARS)
const carsOne = (id) => fetchAll(CARS_ONE, id)
const newCars = (madel, marka, color, yili, divigitel, yoqilgi, transmission, kuzuv, perevod, yurgani, narxi, aksiya, opisaniya, ismiz, gmail, photo) => fetchAll(NEW_CAR, madel, marka, color, yili, divigitel, yoqilgi, transmission, kuzuv, perevod, yurgani, narxi, aksiya, opisaniya, ismiz, gmail, photo)
const editCars = (madel, marka, color, yili, divigitel, yoqilgi, transmission, kuzuv, perevod, yurgani, narxi, aksiya, opisaniya, ismiz, gmail, photo, id) => fetchAll(EDIT_CARS, madel, marka, color, yili, divigitel, yoqilgi, transmission, kuzuv, perevod, yurgani, narxi, aksiya, opisaniya, ismiz, gmail, photo, id)
const delCars = (id) => fetchAll(DEL_CARS, id)

module.exports = {
    allCarss,
    carsOne,
    newCars,
    editCars,
    delCars
}