/* 
_app.jsx 파일 대신 사용하여 공통 레이아웃을 적용
레이아웃 컴포넌트는 모든 페이지에 적용되므로, 공통 레이아웃을 적용하기 위해 사용
/ -> 상품 목록 페이지
/cart -> 장바구니 페이지
/login -> 로그인 페이지
/product -> 상품 상세 페이지
 */

import Link from "next/link";

function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/">홈</Link> | <Link href="/cart">장바구니</Link>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
