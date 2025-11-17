import Image from "next/image";
import styles from "./ProductList.module.scss";
import Link from "next/link";

function ProductList({ products = [] }) {
  return (
    <div className={styles["product-container"]}>
      <ul className={styles["product-list"]}>
        {products?.length > 0 &&
          products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <li className={styles["product-item"]}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={350}
                  height={350}
                  className={styles["product-image"]}
                />
                <h3 className={styles["product-name"]}>{product.name}</h3>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}

export default ProductList;
