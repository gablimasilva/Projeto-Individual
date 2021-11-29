create database ProjetoIndividual;
use ProjetoIndividual;

create table usuarios(
idUsuario int primary key,
nome varchar(50),
email varchar(50),
senha varchar(50)
);

select * from usuarios;

create table registro(
idRegistro int,
fkUsuario int,
foreign key (fkUsuario) references usuarios(idUsuario),
primary key(idRegistro,fkUsuario),
dataHora DATETIME
);