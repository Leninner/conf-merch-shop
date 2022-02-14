import { useState } from 'react';
import { initialState } from '../initialState';

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [payload, ...cart],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: cart.filter((item) => item.id !== payload),
    });
  };

  return { addToCart, removeFromCart, state };
};
