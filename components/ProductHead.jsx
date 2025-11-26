import styles from "./ProductHead.module.scss";

function ProductHead({ title }) {
  return (
    <div className={styles.head}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default ProductHead;
