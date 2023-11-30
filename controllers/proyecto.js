const { response } = require("express");

const Proyecto = require("../models/proyecto");
const { json } = require("body-parser");

const proyectoGet = async (req, res = response) => {
  const proyectos = await Proyecto.find();

  res.json({
    proyectos,
  });
};

const proyectoPost = async (req, res) => {
  const body = req.body;

  try {
    const proyecto =await new Proyecto(body);
    await proyecto.save();
    return res.json(proyecto)
  } catch (error) {
    mensaje = "Problemas al crear el nuevo proyecto";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });

}
const proyectoPut = async (req, res) => {
  const { id, nombre, horasDedicadas, valorProyecto, numeroIntegrantes} = req.body;
  let mensaje = "Modificación exitosa";

  try {
    await Proyecto.findOneAndUpdate({ id: id }, { nombre: nombre, horasDedicadas: horasDedicadas, valorProyecto: valorProyecto, numeroIntegrantes: numeroIntegrantes });
  } catch (error) {
    mensaje = "Problemas al modificar este proyecto";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const proyectoDelete = async (req, res = response) => {
  const { id } = req.body;
  let mensaje = "se elimino exitosamente este proyecto";
  try {
    await Proyecto.deleteOne({ _id: id });
  } catch (error) {
    mensaje = "Hay problemas al eliminar este proyecto";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = { proyectoGet, proyectoPost, proyectoPut, proyectoDelete };


//proyectos: fecha, magnitud, ubicacion