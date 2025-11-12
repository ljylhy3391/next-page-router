/* product list component
http://localhost:4000/products
id, name, price, imageUrl
 */

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./ProductList.module.scss";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className={styles["product-container"]}>
      <ul className={styles["product-list"]}>
        {products?.length > 0 &&
          products.map((product) => (
            <li key={product.id} className={styles["product-item"]}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={350}
                height={350}
                className={styles["product-image"]}
              />
              <h3 className={styles["product-name"]}>{product.name}</h3>
              <p className={styles["product-price"]}>{product.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProductList;
