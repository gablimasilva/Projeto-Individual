create database ProjetoIndividual;
use ProjetoIndividual;
drop database ProjetoIndividual;

create table usuarios(
email varchar(50) primary key,
nome varchar(50),
esporte varchar(50),
senha varchar(50)
);

select * from usuarios;

create table registro(
idRegistro int primary key auto_increment,
emailUsuario varchar(50),
foreign key (emailUsuario) references usuarios(email),
dataHora DATETIME
);

select * from registro;

SELECT 
	count(email) as usuario,
	count(idRegistro) as registros
		FROM usuarios
			JOIN registro
				ON email = emailUsuario;

SELECT count(usuarios.email) as usuario FROM usuarios;

SELECT 
    count(idRegistro) as registros
        FROM registro;
        
SELECT 
        count(email) as usuario,
        count(idRegistro) as registros
            FROM usuarios
				JOIN registro
                    ON email = emailUsuario;