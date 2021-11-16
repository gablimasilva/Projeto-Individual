drop database projetoindividual;
create database projetoindividual;
use projetoindividual;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);
drop table usuario;
select * from usuario;
truncate usuario;

-- create table registro(
-- idRegistro int auto_increment,
-- fkUsuario int,
-- foreign key (fkUsuario) references usuario(idUsuario),
-- primary key(idRegistro,fkUsuario),
-- dataHora datetime
-- );

alter user 'root'@'localhost' identified with mysql_native_password by 'YES';