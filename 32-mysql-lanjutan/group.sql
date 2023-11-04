select tahun from film group by tahun order by tahun DESC;

select tahun, count(nama) as total_film 
from film group by tahun 
order by tahun desc;
