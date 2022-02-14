import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';

export const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);

  const { cart, buyer } = state;
  const navigate = useNavigate();

  const paypalOptions = {
    clientId: 'AQFrhhX_j2fu13qmV7zHpDoyqRRZWkk7ZZM6GvjoCZiXPrVJ9hZl6K_MAdfGP8xddBTP7LWZ9peO-4kI',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);

    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);
    }

    navigate('/checkout/success');
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resument del pedido:</h3>
        {cart.map((item, index) => {
          return (
            <div className='Payment-item' key={index}>
              <div className='Payment-element'>
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
            </div>
          );
        })}
        <div className='Payment-button'>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};
