import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

export const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <header className='flex justify-between my-6 text-[#33b1ff]'>
      <h1 className='text-4xl font-bold'>
        <Link to='/'>Conf Merch Shop</Link>
      </h1>
      <div className='flex items-center justify-evenly justify-items-center w-[30px] ml-[0.5em]'>
        <Link to='/checkout'>
          <i className='fas fa-shopping-basket fa-2x' title='Checkout' />
        </Link>
        {cart.length > 0 && <span className='font-bold text-[#33b13a] text-[14px] ml-[5px]'>{cart.length}</span>}
      </div>
    </header>
  );
};
