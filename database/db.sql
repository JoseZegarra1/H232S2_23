CREATE DATABASE customersdb;

-- to use database
USE customersdb;

-- creating a new table
CREATE TABLE PacienteCrud (
  ID int NOT NULL AUTO_INCREMENT,
  DNI char(8) NOT NULL,
  NOMBRES varchar(60) NOT NULL,
  APELLIDOS varchar(60) NOT NULL,
  FECHANACIMIENTO date NOT NULL,
  SEXO varchar(10) NOT NULL,
  CELULAR char(9) NOT NULL,
  CORREO varchar(60) NOT NULL,
  DIRECCION varchar(60) NOT NULL,
  COLESTEROL varchar(30) NOT NULL,
  GLUCOSA varchar(30) NOT NULL,
  HEMOGLOBINA varchar(30) NOT NULL,
  TIPOSEGURO varchar(30) NOT NULL,
  PRIMARY KEY (ID)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO PacienteCrud (DNI, NOMBRES, APELLIDOS, FECHANACIMIENTO, SEXO, CELULAR, CORREO, DIRECCION, COLESTEROL, GLUCOSA, HEMOGLOBINA, TIPOSEGURO) VALUES
('12345678', 'Juan', 'Pérez', '1985-05-15', 'Masculino', '987654321', 'juan.perez@example.com', 'Av. Siempre Viva 123', '200 mg/dL', '90 mg/dL', '15 g/dL', 'Privado');

-- select * from PacienteCrud;
