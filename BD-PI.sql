drop database projetoindividual;

create database ProjetoIndividual;
use ProjetoIndividual;

create table usuarios(
apelido varchar(50) primary key,
senha varchar(50),
cpf char(11),
email varchar(50),
nome varchar(50)
);

create table registro(
idRegistro varchar(50),
fkApelido varchar(50),
foreign key (fkApelido) references usuarios(apelido),
primary key(idRegistro,fkApelido),
dataHora DATETIME
);