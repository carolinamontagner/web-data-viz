var database = require("../database/config");

function buscarUltimasMedidas() {
var instrucaoSql= `SELECT acertos, COUNT(fkusuario) AS quantidade_usuarios
FROM respostas
WHERE fkusuario 
GROUP BY acertos
;`
    
    
    
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

    var instrucaoSql= `SELECT acertos, COUNT(fkusuario) AS quantidade_usuarios
FROM respostas
// WHERE fkusuario 
GROUP BY acertos;
    

        // dht11_temperatura as temperatura, 
        // dht11_umidade as umidade,
        //                 DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
        //                 fk_aquario 
        //                 FROM medida WHERE fk_aquario =  
        //             ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
