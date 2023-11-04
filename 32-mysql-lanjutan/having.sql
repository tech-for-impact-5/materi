-- ## having
SELECT tahun, COUNT(*) as jumlah_film
FROM film
GROUP BY tahun
HAVING jumlah_film > 1
ORDER BY tahun;

SELECT semester, COUNT(*) as jumlah_mahasiswa
FROM mahasiswa
GROUP BY semester
HAVING jumlah_mahasiswa > 2
ORDER BY semester;