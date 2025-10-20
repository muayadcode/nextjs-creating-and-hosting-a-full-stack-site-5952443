import ShoppingCartList from "./ShoppingCartList";

export default async function CartPage() {
  const response = await fetch('https://legendary-sniffle-5p99qxwj4rrh446j-3000.app.github.dev/api/users/2/cart', {
    cache: 'no-cache',
  });
  const cartProducts = await response.json();

  return (
    <ShoppingCartList initialCartProducts={cartProducts} />
  );
}