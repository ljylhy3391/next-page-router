/* 
_app.jsx 파일 대신 사용하여 공통 레이아웃을 적용
레이아웃 컴포넌트는 모든 페이지에 적용되므로, 공통 레이아웃을 적용하기 위해 사용
/ -> 상품 목록 페이지
/cart -> 장바구니 페이지
/login -> 로그인 페이지
/product -> 상품 상세 페이지
 */

import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link
            href="/"
            className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
          >
            홈
          </Link>
          <span className={styles.separator}>|</span>
          <Link
            href="/cart"
            className={`${styles.link} ${
              isActive("/cart") ? styles.active : ""
            }`}
          >
            장바구니
          </Link>
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
