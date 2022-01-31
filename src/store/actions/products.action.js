export const SELECTED_PRODUCT = 'SELECTED_PRODUCT';

export const FILTERED_PRODUCT = 'FILTERED_PRODUCT';

export const selectProduct = id => ({
  type: SELECTED_PRODUCT,
  productId: id,
});

export const filterProduct = id => ({
  type: FILTERED_PRODUCT,
  categoryId: id,
});
