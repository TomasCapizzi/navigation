import {combineReducers, createStore} from 'redux';

import cartReducer from './reducers/cart.reducer';
import categoryReducer from './reducers/category.reducer';
import productsReducer from './reducers/products.reducer';

//combinamos los reducers
const RootReducer = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
});

// Creamos la store
export default createStore(RootReducer);