create table monedas (
nombre VARCHAR(50)
);
insert into monedas (nombre) values
('Guarani'),
('Rupiah'),
('Ruble'),
('Peso'),
('Peso'),
('Yuan Renminbi'),
('Yuan Renminbi'),
('Yuan Renminbi'),
('Euro'),
('Ariary'),
('Denar'),
('Rupiah'),
('Ruble'),
('Yuan Renminbi'),
('Lek');


-- COUNT nos sirve para contar la cantidad de registros

SELECT COUNT(*) FROM monedas;

-- Podemos agregar filtros anidados o no usando el WHERE 
SELECT COUNT(*) FROM monedas WHERE nombre = 'Peso';
SELECT COUNT(*) FROM monedas WHERE nombre = 'Peso' OR nombre = 'Euro';

-- DISTINCT selecciona los registros ÚNICOS.
--VISUALIZAR TODAS LAS MONEDAS SIN REPETIRLAS
SELECT DISTINCT(nombre) FROM monedas;

--CONTAR TODAS LAS MONEDAS DISTINTAS (sin repetir).
SELECT COUNT(DISTINCT(nombre)) FROM monedas;

create table ventas (categoria VARCHAR(50), monto INT);
insert into ventas (categoria, monto) values
('Books', 214),
('Games', 293),
('Baby', 241),
('Tools', 719),
('Tools', 385),
('Movies', 882),
('Outdoors', 654),
('Baby', 332),
('Grocery', 332),
('Toys', 952),
('Games', 682),
('Books', 527),
('Kids', 980),
('Grocery', 300);

-- Pregunta 1:
SELECT COUNT(*) AS cantidad_registros FROM ventas ;

-- Pregunta 2:
SELECT COUNT (distinct(categoria)) AS registros_distintos FROM ventas;

-- Pregunta 3:
SELECT COUNT(distinct(monto)) AS montos_distintos FROM ventas;

-- Pregunta 4:
SELECT COUNT(*) FROM ventas WHERE categoria = ‘Tool’ OR categoria = ‘Games’ ;

-- Podemos cambiar el nombre de la columna resultante de una funcion de agregado dando un "alias" usando AS nombre_columna, por ej:
SELECT COUNT(*) AS total_registros FROM monedas;
-- esta solución hace que como resultado sea mas descriptivo.

-- Cuando queremos obtener los resultados agrupados de una consulta en la cual hayamos utilizado una funcion de agregado, usaremos la clausula "GROUP BY columna".
SELECT nombre, COUNT(*) FROM monedas GROUP BY nombre;

--Tambien podemos usar alias en las funciones de agregado
SELECT nombre, COUNT(*) AS cantidad FROM monedas GROUP BY nombre;

SELECT categoria, COUNT(*) AS cuenta FROM ventas GROUP BY categoria ORDER BY cuenta DESC;

-- Otras funciones de agregado que podemos usar son: SUM(columna) para sumar, y AVG(columna) para promediar. Tambien se le pueden dar alias y agrupar.
SELECT categoria, SUM(monto) AS total_montos, AVG(monto) AS promedio_vendido FROM ventas GROUP BY categoria;


create table transacciones (id INT, monto INT);
insert into transacciones (id, monto) values
(4, 490),
(4, 159),
(2, 1000),
(2, 578),
(1, 613),
(3, 366),
(2, 546),
(5, 265),
(1, 163),
(2, 135),
(2, 404),
(4, 885),
(2, 309),
(5, 78);

