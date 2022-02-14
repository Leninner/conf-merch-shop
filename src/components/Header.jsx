import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='flex justify-between my-6 text-[#33b1ff]'>
      <h1 className='text-4xl font-bold'>
        <Link to='/'>Conf Merch Shop</Link>
      </h1>
      <div className='flex items-center justify-evenly justify-items-center w-[30px] ml-[0.5em]'>
        <Link to='/checkout'>
          <i className='fas fa-shopping-basket fa-2x' title='Checkout' />
        </Link>
      </div>
    </header>
  );
};
