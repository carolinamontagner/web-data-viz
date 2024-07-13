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


// Criei essa função dentro do medida models para consultar o ranking via novo select adcionado ao banco de dados 26/06


function buscarPosition() {
    // Define uma variável chamada 'instrucaoSql' que armazena a instrução SQL para selecionar os dados desejados.27/06
    var instrucaoSql = `
        SELECT u.nome, r.acertos
        FROM respostas r
        JOIN usuario u ON r.fkusuario = u.idusuario
        ORDER BY r.acertos DESC
        LIMIT 3;
    `

    // Executa a instrução SQL usando a função 'executar' do objeto 'database' e retorna o resultado. 27/06
    return database.executar(instrucaoSql);
}
function buscarPorcentagem() {
    // Define uma variável chamada 'instrucaoSql' que armazena a instrução SQL para selecionar os dados desejados.12/07
    var instrucaoSql = `
         SELECT 
    acertos,
    COUNT(idResp) * 100.0 / (SELECT COUNT(*) FROM respostas) AS porcentagem
FROM
    respostas
GROUP BY 
    acertos;
    `

    // Executa a instrução SQL usando a função 'executar' do objeto 'database' e retorna o resultado. 27/06
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    enviarQuiz,
    buscarPosition,
    buscarPorcentagem
}
