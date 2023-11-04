# mysql lanjutan
## Agregat
SELECT COUNT(*) as total_film
FROM film;

SELECT AVG(tahun) as rata_tahun_rilis
FROM film;

SELECT MAX(tahun) as tahun_terbaru
FROM film;

SELECT MIN(tahun) as tahun_tertua
FROM film;