CREATE DATABASE StepByStep;

USE StepByStep;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
		nome VARCHAR(50),
			email VARCHAR(50),
				senha VARCHAR(50)
	);


Create Table respostas(
	idResp Int Primary Key auto_increment,
    acertos int,
    	fkusuario int,
     		constraint fkusuario foreign key (fkusuario)
				references usuario(idusuario)
    );