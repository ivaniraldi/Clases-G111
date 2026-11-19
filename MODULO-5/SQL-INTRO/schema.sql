CREATE DATABASE tutorias_g111;
--Esto es un comentario

--\l --> LISTAR BASES DE DATOS
--\c tutorias_g111
-- SELECT ---> Nos sirve para consultar datos de una tabla
-- INSERT ---> Nos sirve para introducir datos en una tabla
-- UPDATE ---> Nos sirve para actualizar datos de una tabla
-- CREATE TABLE --> nos sirve para crear una tabla
-- DELETE ---> Nos sirve para borrar datos de una tabla

CREATE TABLE usuarios (id SERIAL, nombre VARCHAR, email VARCHAR, password VARCHAR, edad INT);
--                        SERIAL -> es un tipo de dato numeral entero y autoincremental
-- \dt --> DETALLA O MUESTRA LAS TABLAS CREADAS

INSERT INTO usuarios (nombre, email, password, edad) VALUES ('Ivan', 'ivan@profe.com', 'ivan123', 28);
INSERT INTO usuarios (nombre, email, password, edad) VALUES ('Juan', 'juan@tutor.com', 'juan123', 19);
INSERT INTO usuarios (nombre, email, password, edad) VALUES ('Josefa', 'josefa@alumna.com', 'jos123', 35);

SELECT * FROM usuarios;

-----------------------------------------------------------------
UPDATE usuarios SET password = 'ivan321' WHERE id = 1;
-----------------------------------------------------------------

SELECT * FROM usuarios WHERE edad > 30;
-- WHERE Nos sirve para filtrar las busquedas, podemos usar > < >= <= etc...

INSERT INTO usuarios (nombre, email, password, edad) VALUES ('Juan', 'juan2@tutor.com', 'juancito123', 19);

SELECT * FROM usuarios WHERE nombre = 'Juan' AND edad = 19;
--  AND me sirve como "&&" en JavaScript, significa "y" y basicamente nos permite sumar comprobaciones 
SELECT * FROM usuarios WHERE edad > 20 AND edad < 30;

SELECT * FROM usuarios WHERE nombre = 'Ivan' OR nombre = 'Juan';
-- OR me sirve como "||" en JavaScript, significa "o" y nos sirve para que se cumpla una condición o la otra.
------------------------------------------------------------------

SELECT nombre, edad FROM usuarios;
-- Cuando uso SELECT con '*' estoy usando un "comodin" para traerme TODAS las columnas, pero puedo especificar las columnas que quiero separando con coma.
INSERT INTO usuarios (nombre, email, password, edad) VALUES ('Juan', 'juan2@tutor.com', 'juancito123', 19);

DELETE FROM usuarios WHERE id = 5;

-- Tanto como con el UPDATE en el DELETE es IMPORTANTISIMO!!!! usar el WHERE cuando vamos a ACTUALIZAR o ELIMINAR datos.
INSERT INTO usuarios (nombre, email, password, edad) VALUES ('Maria', 'maria@alumnna.com', 'mari123', 25);

INSERT INTO usuarios (id, nombre, email, password, edad) VALUES (5, 'Pepe', 'pepe@tutor.com', 'pepe123', 47);

----------------------------- ORDENANDO RESULTADOS -------------------------------
SELECT * FROM usuarios ORDER BY id ASC;
---------------------------------- ASC es de menor a mayor (o de a-z)
SELECT * FROM usuarios ORDER BY id DESC;
---------------------------------  DESC es de mayor a menor (o de z-a)


-------------------------- LIMITANDO RESULTADOS ------------------------------------
-- USUARIO DE MAYOR EDAD
SELECT * FROM usuarios ORDER BY edad DESC LIMIT 1;

-- 3 PRIMEROS USUARIOS
SELECT * FROM usuarios ORDER BY id ASC LIMIT 3;

---------------------------- MODIFICANDO TABLAS -------------------------------------
ALTER TABLE usuarios ADD COLUMN telefono INT;

UPDATE usuarios SET telefono = 123;
-- Al no colocar el WHERE se me actualizan TOOOODOS los registros de la tabla.
ALTER TABLE usuarios DROP COLUMN telefono;

-------------------------- ELIMINANDO TABLAS ----------------------------------------
CREATE TABLE usuarios2 (id SERIAL, nombre VARCHAR, email VARCHAR, password VARCHAR, edad INT);
---- 
DROP TABLE usuarios2;

---------------------------- ELIMINAR BASE DE DATOS ---------------------------------
-- DROP DATABASE tutorias_g111;