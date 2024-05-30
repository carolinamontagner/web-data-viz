CREATE DATABASE StepByStep;

USE StepByStep;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
	);
    select * from usuario;

Create Table dashboard(
	idDash Int Primary Key auto_increment,
    nome varchar(50),
    fkquiz int,
     constraint fkquiz foreign key (fkquiz)
	references usuario(id)
    );