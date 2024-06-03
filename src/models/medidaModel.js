var database = require("../database/config");

function buscarUltimasMedidas() {
    var instrucaoSql = `SELECT acertos, COUNT(DISTINCT fkusuario) AS quantidade_usuarios
FROM respostas
WHERE acertos IN (0, 1, 2, 3, 4)
GROUP BY acertos;`





    // var instrucaoSql = `SELECT 
    //     dht11_temperatura as temperatura, 
    //     dht11_umidade as umidade,
    //                     momento,
    //                     DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
    //                 FROM medida
    //                 WHERE fk_aquario = ${idAquario}
    //                 ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    var instrucaoSql = `SELECT acertos, COUNT(DISTINCT(fkusuario)) AS quantidade_usuarios
    FROM respostas
    WHERE acertos IN (0, 1, 2, 3, 4)
    GROUP BY acertos;
`



    // dht11_temperatura as temperatura, 
    // dht11_umidade as umidade,
    //                 DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
    //                 fk_aquario 
    //                 FROM medida WHERE fk_aquario =  
    //             ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function enviarQuiz(idUsuario, acertos) {
    var instrucaoSql = `INSERT INTO respostas (fkusuario,acertos) VALUES
    (${idUsuario},${acertos})`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    enviarQuiz
}
