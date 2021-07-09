const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Recipes = require('./Recipes');
const Types = require("./Types");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use("/recipe", Recipe);
router.use("/recipes", Recipes);
router.use("/types", Types);

router.get("*", (req, res) => {
  res.status(404).send("ruta funcionando");
});

module.exports = router;
