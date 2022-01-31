export const ADD_CART = 'ADD_CART';

export const addCart = (item, cantidad) => ({
  type: ADD_CART,
  product: item,
  cantidad: cantidad
});
