/* 장바구니 페이지 */

import CartHead from "@/components/CartHead";
import CartList from "@/components/CartList";
import { fetchCarts } from "@/api";

function Cart({ carts }) {
  return (
    <div>
      <CartHead title="장바구니" />
      <CartList carts={carts} />
    </div>
  );
}

export default Cart;

export async function getServerSideProps() {
  const carts = await fetchCarts();
  return { props: { carts } };
}
