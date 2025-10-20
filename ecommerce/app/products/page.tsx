import ProductsList from "../ProductsList";

export default async function ProductsPage() {
  const response = await fetch('https://legendary-sniffle-5p99qxwj4rrh446j-3000.app.github.dev//api/products');
  const products = await response.json();

  const response2 = await fetch('https://legendary-sniffle-5p99qxwj4rrh446j-3000.app.github.dev//api/users/2/cart');
  const cartProducts = await response2.json();

  return (
    <div className="container mx-auto p-8"> 
      <h1 className="text-4xl font-bold mb-8">Products</h1> 
      <ProductsList products={products} initialCartProducts={cartProducts} />
    </div>
  );
}