const CtrlFood = {};
const Food = require("../models/food.js");

CtrlFood.addFood = async (req, res, next) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(200).json({ message: "Nueva comida agregada" });
  } catch (error) {
    res.status(400).json(error);
  }
};

CtrlFood.listFood = async (req, res, next) => {
  try {
    const foods = await Food.find({});
    res.status(200).json(foods);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener los datos" });
  }
};

CtrlFood.viewFood = async (req, res, next) => {
  try {
    const food = await Food.findById({ _id: req.params.id });
    res.status(200).json(food);
  } catch (error) {
    res.status(404).json({ message: "no existe esa comida" });
  }
};

CtrlFood.deleteFood = async (req, res, next) => {
  try {
    const food = await Food.findAndDeleteById({ _id: req.params.id });
    res.status(200).json({ message: "Comida eliminada con exito" });
  } catch (error) {
    res.status(400).json({ message: "No se pudo eliminar esta comida" });
  }
};

CtrlFood.updateFood = async (req, res, next) => {
  try {
    const food = await Food.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(food);
  } catch (error) {}
};

module.exports = CtrlFood;
