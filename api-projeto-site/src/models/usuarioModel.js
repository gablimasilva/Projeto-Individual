var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `SELECT count(usuarios.email) as usuario FROM usuarios;`;
    var inserir = `SELECT count(idRegistro) as registros FROM registro;`;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao,inserir);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuarios WHERE email = '${email}' AND senha = '${senha}';`;
    var inserir = `INSERT INTO registro(emailUsuario,dataHora) VALUES ('${email}', now());`;
    console.log("Executando a instrução SQL: \n"+instrucao+inserir);
    return database.executar(instrucao,inserir);
}

function cadastrar(email, nome, esporte, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", email, nome, esporte, senha);
    var instrucao = `
        INSERT INTO usuarios (nome, email, esporte, senha) VALUES ('${email}', '${nome}', '${esporte}', '${senha}');
    `;
    var inserir = `SELECT count(idRegistro) as registros FROM registro;`;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao, inserir);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};