const express = require('express')
const router = express.Router()
const md5 = require('md5')
const multer = require('multer')
const path = require('path')
const {add, one, all, updat, delet } = require('../controller/Olganlar')
const Client = require('../modules/client/client')


const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/image');
    },
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: storage});

router.post('/add', upload.single('photo'), Client.POST)
router.get('/all', Client.GET)
router.get('/:id', Client.GET_ONE)
router.put('/:id', Client.UPDATE)
router.delete('/:id', Client.DELETE)



module.exports = router