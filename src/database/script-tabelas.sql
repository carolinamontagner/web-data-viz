CREATE DATABASE StepByStep;

USE StepByStep;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
	);
    select * from usuario;
    
    
    CREATE TABLE preferencia(
    idDanca int primary key auto_increment,
    nomeDanca varchar (45),
    fkusuario int,
    	FOREIGN KEY (fkusuario) REFERENCES usuario(id)
    );
select * from preferencia;
insert into preferencia (nomeDanca) values 
("jazz" ),
("hip-hop"),
("ballet"),
  ("chair dance"),
  ("zouk"),
  ("contemporâneo");