var express = require('express');
var router = express.Router();
const Carrera = require('../models/carreras');


/* POST users listing. */
router.post('/', async (req, res, next)  => {
 try {
   

  const carreraReq = req.body;
  const  {nombre,area,coordinador} = carreraReq;
  var carrera = new Carrera({
    nombre,
    area,
    coordinador,
});
await carrera.save();


res.json({
  ok:true,
carrera
});


} catch (error) {
   console.log(error)
}
});

/* GET users listing. */
router.get('/', async function(req, res, next) {
 var carreras = await Carrera.find({});

res.json({
  ok:true,
carreras
});

});

/* PUT users listing. */
router.put('/:idCarrera',async function(req, res, next) {
  try {
    var id = req.params.idCarrera;
    const carreraReq = req.body;
    const  {nombre,area,coordinador} = carreraReq;

console.log(id);
    var carrera = await Carrera.findById(id);
    if(!carrera) return res.status(400).json({mensaje:"Carrera no existe"});

    carrera.nombre = nombre;
    carrera.area = area;
    carrera.coordinador = coordinador;

    await carrera.save();

    res.json({
      ok:true,
    carrera
    });

  } catch (error) {
    console.log(error)
  }


});


/* PUT users listing. */
router.get('/:area', async function(req, res, next) {
  var area = req.params.area;
  console.log(area)
  var carreras = await Carrera.find({area});

  res.json({
    ok:true,
  carreras
  });
  });

module.exports = router;
