show databases;

create database movie_app;

use movie_app;

show TABLES;

create table mahasiswa (
	id int(5) primary key not null auto_increment,
	nama VARCHAR(100) not NULL,
	email VARCHAR(25) not NULL,
	jurusan VARCHAR(100)
);

DESC mahasiswa;

DROP TABLE mahasiswa;

alter table mahasiswa
drop jurusan;

alter table mahasiswa
add semester int(5);

insert into mahasiswa (nama, email, semester) VALUES 
("Auzan", "auzan@gmail.com", 3),
("Jalil", "jalil@gmail.com", 5),
("adam", "adam@gmail.com", 7);
("Budi", "budi@gmail.com", 2),
("Citra", "citra@gmail.com", 4),
("David", "david@gmail.com", 6),
("Elsa", "elsa@gmail.com", 1),
("Fauzi", "fauzi@gmail.com", 3),
("Gina", "gina@gmail.com", 5),
("Hendra", "hendra@gmail.com", 7),
("Irene", "irene@gmail.com", 2),
("Joko", "joko@gmail.com", 4),
("Kartika", "kartika@gmail.com", 6),
("Lina", "lina@gmail.com", 1),
("Maulana", "maulana@gmail.com", 3),
("Nina", "nina@gmail.com", 5),
("Oscar", "oscar@gmail.com", 7),
("Putri", "putri@gmail.com", 2),
("Rizky", "rizky@gmail.com", 4),
("Siti", "siti@gmail.com", 6);

select * from mahasiswa;
select id, email from mahasiswa;
select * from mahasiswa where id = 3;

update mahasiswa set semester = 10 where id = 3;

create table film (
	id int(5) primary key not null auto_increment,
	nama VARCHAR(100) not NULL,
	tahun int(10) not NULL
);

INSERT INTO film (nama, tahun) VALUES
('Spider-Man: No Way Home', 2021),
('The Lord of the Rings: The Fellowship of the Ring', 2001),
('The Dark Knight', 2008),
('Inception', 2010),
('Avatar', 2009),
('Avengers: Endgame', 2019),
('The Matrix', 1999),
('Jurassic Park', 1993),
('The Shawshank Redemption', 1994),
('The Godfather', 1972),
('Pulp Fiction', 1994),
('Interstellar', 2014),
('The Avengers', 2012),
('The Lion King', 1994),
('The Titanic', 1997),
('Forrest Gump', 1994),
('E.T. the Extra-Terrestrial', 1982),
('Star Wars: A New Hope', 1977),
('Jaws', 1975),
('Gladiator', 2000);

select * from film;
select * from film WHERE tahun >= 2015 order by tahun desc;

create table favorite (
	id int(5) primary key not null auto_increment,
	mahasiswa_id int(5),
	film_id int(5),
	FOREIGN key (mahasiswa_id) REFERENCES mahasiswa(id),
	FOREIGN key (film_id) REFERENCES film(id)
);


insert into favorite (mahasiswa_id, film_id) values 
(1, 8),(1, 17),(1, 19),
(2, 8),(2, 6),(2, 15),
(3, 4),(3, 8),(3, 10),
(4, 2),(4, 7),(4, 12),(4, 10),(4, 15),(4, 17),(4, 19),
(5, 1),(5, 2),(5, 4),(5, 4),(5, 10),(5, 12),(5, 14),(5, 20),
(6, 3),(6, 6),(6, 9),(6, 12),(6, 15),(6, 18),
(7, 1),(7, 10),(7, 11),(7, 12),
(8, 4),(8, 7),(8, 11),(8, 13),(8, 17);

SELECT * from mahasiswa;
SELECT * from film;
select * from favorite;
select * from favorite where mahasiswa_id = 1;