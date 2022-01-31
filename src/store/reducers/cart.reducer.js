import {ADD_CART} from '../actions/cart.action';
import {productsList} from '../../utils/data/productsList';

const initialState = {
  products: productsList,
  selected: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        selected: [
          ...state.selected,
          state.products.find(item => item.id === action.product.id),
        ],
      };

    default:
      return state;
  }
};

export default cartReducer;
