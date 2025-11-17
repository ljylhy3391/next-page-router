/* product page
 */

import ProductList from "@/components/ProductList";
import ProductHead from "@/components/ProductHead";
import { fetchProducts } from "@/api";

function ProductPage({ products }) {
  return (
    <div>
      <ProductHead title="상품 목록" />
      <ProductList products={products} />
    </div>
  );
}

export default ProductPage;

export async function getServerSideProps() {
  const products = await fetchProducts();
  return { props: { products } };
}
