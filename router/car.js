const express = require('express')
const router = express.Router()
const md5 = require('md5')
const multer = require('multer')
const path = require('path')
const {add,one,all,renew,delet,postt,single, whole, neww , remove } = require('../controller/car')
const Cars = require('../modules/car/car')
const Orders = require('../modules/order/order')

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/image');
    },
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: storage});

router.post('/Car/add', upload.single('photo'), Cars.POST)
router.get('/Car/all', Cars.GET)
router.get('/Car/:id', Cars.GET_ONE)
router.put('/Car/:id', Cars.UPDATE)
router.delete('/Car/:id', Cars.DELETE)
// Order
router.post('/order/add', Orders.POST)
router.get('/order/all', Orders.GET)
router.get('/order/:id', Orders.GET_ONE)
router.put('/order/:id', Orders.UPDATE)
router.delete('/order/:id', Orders.DELETE)


module.exports = router