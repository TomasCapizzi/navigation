import {FILTERED_PRODUCT, SELECTED_PRODUCT} from '../actions/products.action';

import {productsList} from '../../utils/data/productsList';

const initialState = {
  products: productsList,
  filteredProducts: [],
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        selected: state.products.find(item => item.id === action.productId),
      };
    case FILTERED_PRODUCT:
      return {
        ...state,
        filteredProducts: state.products.filter(
          items => items.category === action.categoryId,
        ),
      };

    default:
      return state;
  }
};

export default productsReducer;
