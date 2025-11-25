/* 장바구니 목록 컴포넌트 */
import Image from "next/image";
import styles from "./CartList.module.scss";
import { deleteCart } from "@/api";
import { useRouter } from "next/router";

function CartList({ carts = [] }) {
  const router = useRouter();
  const totalPrice = carts.reduce(
    (acc, cart) => acc + parseFloat(cart.price || 0),
    0
  );

  const handleDeleteCart = async (id) => {
    await deleteCart(id);
    alert("삭제되었습니다.");
    router.reload();
  };

  return (
    <div className={styles["cart-container"]}>
      <ul className={styles["cart-list"]}>
        {carts.map((cart) => (
          <li key={cart.id} className={styles["cart-item"]}>
            <Image
              src={cart.imageUrl}
              alt={cart.name}
              width={350}
              height={350}
              className={styles["cart-image"]}
            />
            <div className={styles["cart-info"]}>
              <h2 className={styles["cart-name"]}>{cart.name}</h2>
              <p className={styles["cart-price"]}>
                {parseFloat(cart.price).toLocaleString()}원
              </p>
            </div>
            <button
              className={styles["cart-delete-button"]}
              onClick={() => handleDeleteCart(cart.id)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <div className={styles["cart-summary"]}>
        <div className={styles["summary-row"]}>
          <span className={styles["summary-label"]}>총 수량</span>
          <span className={styles["summary-value"]}>{carts.length}개</span>
        </div>
        <div className={styles["summary-row"]}>
          <span className={styles["summary-label"]}>총 금액</span>
          <span
            className={`${styles["summary-value"]} ${styles["total-price"]}`}
          >
            {totalPrice.toLocaleString()}원
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartList;
