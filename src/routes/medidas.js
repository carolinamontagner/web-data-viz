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
// Define uma rota GET para '/position/' 27/06
// Quando essa rota é acessada, a função 'buscarPosition' do medidaController é chamada 27/06
router.get("/position/", function (req, res) {
    medidaController.buscarPosition(req, res);
})
//  Quando essa rota é acessada, a função 'buscarPorcentagem' do medidaController é chamada 12/07
router.get("/porcentagem/", function (req, res) {
    medidaController.buscarPorcentagem(req, res);
});
// Exporta a rota para que ele possa ser usado em outras partes da aplicação 27/06
module.exports = router;