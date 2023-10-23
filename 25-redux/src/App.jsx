import Counter from "./components/counter";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <span>Buku</span>
        <Counter />
      </div>
      <div>
        <span>Pulpen</span>
        <Counter />
      </div>
    </>
  );
}

export default App;
