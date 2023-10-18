import CardProduct from "./components/Card";
import ListCard from "./components/list-card/list-card";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />

      <ListCard />

      <h1 className="text-3xl font-bold underline">Hello world!</h1>

    <div className="flex gap-2 flex-wrap">
      <CardProduct name="HTML" img="" price="45k" />
      <CardProduct name="CSS" img="" price="45k"/>
      <CardProduct name="JS" img="" price="55k"/>
      <CardProduct name="React" img="" price="100k"/>
    </div>

    {/* <CardProduct product={{
      name: "HTML",
      price: "50k",
      img: ""
    }}/> */}



      <main>
        <section>section 1</section>
        <section>section 2</section>
        <section>section 4</section>
      </main>

      <div className="m-4 flex flex-row justify-between md:bg-red-300">
        <p className="border-2 border-solid rounded-sm border-black py-3 px-5">
          satu
        </p>
        <p className="border-2 border-solid rounded-sm border-black py-3 px-5">
          dua
        </p>
        <p className="border-2 border-solid rounded-sm border-black py-3 px-5">
          tiga
        </p>
      </div>

      <footer>
        <span>by auzan</span>
      </footer>
    </>
  );
}

export default App;
