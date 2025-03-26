import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <ProductCard />
      </main>
    </div>
  );
};

export default Home;
