const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.put('/upload-csv', multer(multerConfig).single('file'),  (req, res) => {
    // let promise = new Promise((res, rej) => {
    //     return res(req.file)
    // });

    console.log(req.file);
    console.log(req.body.hash);
    // const post = await promise;

    return res.json(req.file);
});


module.exports = routes