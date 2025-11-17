import ProductHead from "@/components/ProductHead";
import { fetchProductsById, createCart } from "@/api";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./ProductDetail.module.scss";

function ProductDetail({ product }) {
  const { id, name, price, imageUrl } = product;
  const router = useRouter();
  const addToCart = async () => {
    await createCart(product);
    alert("장바구니에 추가되었습니다.");
    router.push("/cart");
  };
  return (
    <div className={styles.page}>
      <ProductHead title="상품 상세" />
      <div className={styles.card}>
        <div className={styles.left}>
          <Image
            src={imageUrl}
            alt={name}
            width={350}
            height={350}
            style={{ borderRadius: 8, objectFit: "cover" }}
          />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.price}>{price}</p>
          <button className={styles.button} onClick={() => addToCart()}>
            장바구니 추가
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const product = (await fetchProductsById(id)) || null;
  return {
    props: { product },
  };
}
