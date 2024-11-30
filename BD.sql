CREATE database gestion_eventos1;
use gestion_eventos1;
/*NO SE INSERTO NADA EN LA BASE DE DATOS SE PUEDE DIRECTAMENTE DESDE EL POST AGREGAR LA INF*/
create table Eventos(
id int primary key ,
nombre varchar(255), 
descripcion text ,
fecha datetime ,
lugar varchar(255), 
capacidadMaxima int, 
imagenUrl varchar(255), 
precioEntrada decimal(10,2), 
categoria varchar(100) ,
estado enum('activo','inactivo'), 
createdAt datetime ,
updatedAt datetime
);
create table incripcions 
 (id int primary key,
usuarioId int, 
eventoId int, 
fechaInscripcion datetime, 
estado enum('confirmada','cancelada'), 
createdAt datetime, 
updatedAt datetime
 FOREIGN KEY (eventoId) REFERENCES Evento(id) ON DELETE CASCADE
);