import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../containers/Home';
import { Checkout } from '../containers/Checkout';
import { Information } from '../containers/Information';
import { Payment } from '../containers/Payment';
import { Sucess } from '../containers/Sucess';
import { NotFound } from '../containers/NotFound';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/information' element={<Information />} />
          <Route path='/checkout/payment' element={<Payment />} />
          <Route path='/checkout/sucess' element={<Sucess />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
