var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function enviarQuiz(req, res) {

    var idUsuario = req.body.idUsuario;
    var acertos = req.body.acertos;

   

    medidaModel.enviarQuiz(idUsuario,acertos).then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao enviar o quiz! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
    
}

// Função para buscar a posição dos jogadores no ranking 27/06
function buscarPosition(req, res) {
    console.log(`Recuperando medidas em tempo real`);

    // Chama a função da model para buscar a posição no banco de dados 27/06
    medidaModel.buscarPosition().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado); // Retorna o resultado em formato JSON com status 200 (OK)27/06
            res.json({
                nome: resultado[0].nome // Adiciona o nome do primeiro resultado no JSON de resposta 27/06
            });
        } else {
            res.status(204).send("Nenhum resultado encontrado!"); 
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        // res.status(500).json(erro.sqlMessage); 
    });
}
module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    enviarQuiz,
    buscarPosition
}