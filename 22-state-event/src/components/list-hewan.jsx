import { useState } from "react";

function ListHewan() {
  const [listHewan, setListHewan] = useState([
    { nama: "Ayam", img: "" },
    { nama: "Kambing", img: "" },
    { nama: "Domba", img: "" },
    { nama: "Kucing", img: "" },
    { nama: "Jerapah", img: "" },
  ]);

  return (
    <>
      <h1>Hewan</h1>
      <div>
        {listHewan.length == 0 ? (
          <div>data tidak ada</div>
        ) : (
          listHewan.map((item, index) => (
            <div key={index}>
              {/* <img src={item.img} alt="" /> */}
              <h3>{item.nama}</h3>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default ListHewan;
