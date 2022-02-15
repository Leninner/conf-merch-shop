import { Link, useNavigate } from 'react-router-dom';
import { useRef, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const navigate = useNavigate();

  const form = useRef(null);

  const { cart } = state;

  // New Form Data
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    addToBuyer(buyer);
    setTimeout(() => navigate('/checkout/payment'), 1500);
  };

  return (
    <div className='Information grid grid-cols-[3fr_1fr] gap-8 gap-y-[1.5em] mb-[4em]'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Informacion de contacto:</h2>
        </div>
        <div className='Information-form'>
          <form ref={form}>
            <input type='text' placeholder='Nombre completo' name='name' />
            <input type='text' placeholder='Correo Electronico' name='email' />
            <input type='text' placeholder='Direccion' name='address' />
            <input type='text' placeholder='Apto' name='apto' />
            <input type='text' placeholder='Ciudad' name='city' />
            <input type='text' placeholder='Pais' name='country' />
            <input type='text' placeholder='Estado' name='state' />
            <input type='text' placeholder='Codigo postal' name='cp' />
            <input type='text' placeholder='Telefono' name='phone' />
          </form>
        </div>
        <div className='flex items-center justify-between'>
          <div className='mt-[10px]'>
            <Link to='/checkout'>Regresar</Link>
          </div>

          <div className='Information-next'>
            <button type='submit' onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className='mt-[10px]'>
        <h3 className='text-[18px] mb-2'>Pedido:</h3>
        {cart.map(({ title, price }, index) => {
          return (
            <div className='flex items-center justify-between' key={index}>
              <div className='flex items-center justify-between w-full border-b border-white'>
                <h4 className='m-0 font-semibold'>{title}</h4>
                <span>$ {price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
