import ProductCard from "../Components/ProductCard";

function Home({ addToCart }) {
/*   const products = [
    { id: 1, name: "Lemon Pie", price: 8.99, image: "img1.jpg" },
    { id: 2, name: "Cake", price: 5.5, image: "img2.jpg" }
  ]; */

  return (
    <>
      <h2 className="text-center">Top Deals</h2>

      <div className="row">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default Home;