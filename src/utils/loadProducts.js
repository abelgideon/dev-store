export function loadProducts(initialProducts) {
  return new Promise((resolve) => {
    const cached = localStorage.getItem("products_cache");

    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const isValid = Date.now() - timestamp < 5 * 60 * 1000;

      if (isValid) {
        resolve(data);
        return;
      }
    }

    setTimeout(() => {
      const newCache = {
        data: initialProducts,
        timestamp: Date.now(),
      };

      localStorage.setItem("products_cache", JSON.stringify(newCache));

      resolve(initialProducts);
    }, 500);
  });
}
