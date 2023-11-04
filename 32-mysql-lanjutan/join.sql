-- menampilkan data film yg disukai mahasiswa
select favorite.id, mahasiswa.nama as mahasiswa, film.nama as film from favorite
join mahasiswa on favorite.mahasiswa_id = mahasiswa.id
join film on favorite.film_id = film.id;


-- menampilkan semua data mahasiswa beserta yg disukainya
-- klo ga ada yg disukai, isinya cuma null
select mahasiswa.nama as mahasiswa, film.nama as film from mahasiswa
left join favorite on favorite.mahasiswa_id = mahasiswa.id
left join film on favorite.film_id = film.id;

-- menampilkan jumlah mahasiswa yang menyukai suatu film
-- klo ga ada yg disukai, isinya cuma null
select film.nama as film, count(mahasiswa.nama) from film
left join favorite on favorite.film_id = film.id
left join mahasiswa on favorite.mahasiswa_id = mahasiswa.id
group by film;

-- menampilkan jumlah film yang disukai oleh mahasiswa
select mahasiswa.nama as mahasiswa, count(film.nama) from favorite
join mahasiswa on favorite.mahasiswa_id = mahasiswa.id
join film on favorite.film_id = film.id
group by mahasiswa;