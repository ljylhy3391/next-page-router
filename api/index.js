/* product list component
http://localhost:4000/products
id, name, price, imageUrl
carts list component
http://localhost:4000/carts
id, name, price, imageUrl
 */

const createFetch = (baseURL, defaultInit = {}) => {
  return async (path, init = {}) => {
    const res = await fetch(`${baseURL}${path}`, {
      ...defaultInit,
      ...init,
      headers: { ...(defaultInit.headers || {}), ...(init.headers || {}) },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  };
};

const api = createFetch("http://localhost:4000", {
  headers: { "Content-Type": "application/json" },
});

function fetchProducts() {
  return api("/products");
}

function fetchProductsById(id) {
  return api(`/products/${id}`);
}

function fetchCarts() {
  return api("/carts");
}

function fetchCartsById(id) {
  return api(`/carts/${id}`);
}

function createCart({ id, name, price, imageUrl }) {
  return api(`/carts`, {
    method: "POST",
    body: JSON.stringify({ id, name, price, imageUrl }),
  });
}

export {
  fetchProducts,
  fetchProductsById,
  fetchCarts,
  fetchCartsById,
  createCart,
};
