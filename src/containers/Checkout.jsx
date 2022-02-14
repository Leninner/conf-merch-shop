import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);

  const { cart } = state;

  const handleRemoveItem = (index) => removeFromCart(index);

  const handleSum = () => cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <section className='grid grid-cols-[3fr_1fr] gap-8 pb-[4em] gap-y-[40rem]'>
      <div className='Checkout-content'>
        {cart.length
          ? cart.map(({ title, price }, index) => (
              <div key={index}>
                <h3 className='mb-5 font-semibold'>Lista de Pedidos:</h3>
                <div className='flex items-center justify-between mt-[10px]'>
                  <div className='flex items-center justify-between w-full border-b border-white'>
                    <h4 className='m-0 font-semibold'>{title}</h4>
                    <span>$ {price}</span>
                  </div>

                  <button
                    type='button'
                    className='bg-transparent border-none outline-none'
                    onClick={() => handleRemoveItem(index)}>
                    <i title='eliminar' className='ml-3 text-[rgba(0,_0,_0,_0.4)] fas fa-trash-alt' />
                  </button>
                </div>
              </div>
            ))
          : 'No hay pedidos'}
      </div>

      <div className='Checkout-sidebar'>
        <h3 className='mb-5 font-semibold'>{`Precio total: $ ${handleSum()}`}</h3>
        <Link to='/checkout/information'>
          <button
            type='button'
            className='shadow-[inset_0px_1px_0px_0px_#bee2f9] bg-[linear-gradient(to_bottom,_#63b8ee_5%,_#468ccf_100%)] bg-[#63b8ee] rounded-md border border-[#3866a3] inline-block text-[#14396a] font-[Arial] text-[15px] font-bold px-6 py-[6px] no-underline w-full outline-none'>
            Continuar pedido
          </button>
        </Link>
      </div>
    </section>
  );
};

// margin: 0 0 0 10px;
// color: rgba(0,0,0,0.4);
// cursor: pointer;
