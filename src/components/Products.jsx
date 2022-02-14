import { Product } from './Product';

export const Products = ({ products }) => {
  return (
    <div>
      <div className='grid grid-cols-3 gap-6 gap-y-6'>
        {products.map((value) => (
          <Product key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
};
