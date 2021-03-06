import { useState } from 'react';
import initialState from '../initialState';

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [payload, ...state.cart],
    });
  };

  const removeFromCart = (payload) => {
    const newCart = [...state.cart];
    newCart.splice(payload, 1);

    setState({
      ...state,
      cart: newCart,
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: payload,
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [payload, ...state.orders],
    });
  };

  return { addToCart, removeFromCart, state, addToBuyer, addNewOrder };
};
