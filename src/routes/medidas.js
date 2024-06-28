var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})
router.post("/quiz/", function (req, res) {
    medidaController.enviarQuiz(req, res);
})

router.get("/position/", function (req, res) {
    medidaController.buscarPosition(req, res);
});
module.exports = router;