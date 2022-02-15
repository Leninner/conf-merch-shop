import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Maps } from '../components/Maps';
import { useGetAddress } from '../hooks/useGetAddress';

export const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const { name, address } = buyer;

  const data = useGetAddress(address);

  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2 className='font-semibold'>{name.split(' ')[0]}, gracias por tu compra 😎</h2>
        <span>Tu pedido llegará en 3 dias a: {address}</span>
        <div className='Success-map'>
          <Maps {...data} />
        </div>
      </div>
    </div>
  );
};
