import { Product } from './Product';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Products = () => {
  const { addToCart, state } = useContext(AppContext);

  const { products } = state;

  // Función para evitar pasar una función anónima directamente en el onClick del evento. Es un closure
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div>
      <div className='grid grid-cols-3 gap-6 gap-y-6'>
        {products.map((value) => (
          <Product key={value.id} {...value} handleAddToCart={handleAddToCart(value)} />
        ))}
      </div>
    </div>
  );
};
