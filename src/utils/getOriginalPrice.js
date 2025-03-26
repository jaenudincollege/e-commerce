export const getOriginalPrice = (finalPrice, discountPercentage) => {
  let originalPrice = finalPrice / (1 - discountPercentage / 100);
  return originalPrice.toFixed(2);
};
