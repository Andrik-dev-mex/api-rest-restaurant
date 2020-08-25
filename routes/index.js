const express = require('express');

const router = express.Router();
const foodController = require('../controller/foodController');



router.get('/', (req, res) => { 
    res.send('Hola Mundo');
});

router.get('/food/',foodController.listFood);
router.post('/food/', foodController.addFood);
router.get('/food/:id', foodController.viewFood);
router.put('/food/:id', foodController.updateFood);
router.delete('/food/:id', foodController.deleteFood);

module.exports = router;