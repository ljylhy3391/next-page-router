/* 장바구니 헤더 컴포넌트 */
import styles from "./CartHead.module.scss";

function CartHead({ title }) {
  return (
    <div className={styles["cart-head"]}>
      <h1 className={styles["title"]}>{title}</h1>
    </div>
  );
}

export default CartHead;
