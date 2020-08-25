const CtrlFood = {};
const Food = require('./models/food.js');

CtrlFood.addFood = async (req,res,next) => { 
  try {
    const food = new Food(req.body);
    food.save();
    res.status(200).json({message : 'Nueva comida agregada'});
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = CtrlFood;