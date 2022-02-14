export const Checkout = () => {
  return (
    <section className='grid grid-cols-[3fr_1fr] gap-8 pb-[4em] gap-y-[40rem]'>
      <div className='Checkout-content'>
        <h3 className='mb-5 font-semibold'>Lista de Pedidos:</h3>

        <div className='flex items-center justify-between mt-[10px]'>
          <div className='flex items-center justify-between w-full border-b border-white'>
            <h4 className='m-0 font-semibold'>ITEM name</h4>
            <span>$10</span>
          </div>

          <button type='button' className='ml-2 bg-transparent border-none outline-none'>
            Eliminar
          </button>
        </div>
      </div>

      <div className='Checkout-sidebar'>
        <h3 className='mb-5 font-semibold'>Precio Total: $10</h3>
        <button
          type='button'
          className='shadow-[inset_0px_1px_0px_0px_#bee2f9] bg-[linear-gradient(to_bottom,_#63b8ee_5%,_#468ccf_100%)] bg-[#63b8ee] rounded-md border border-[#3866a3] inline-block text-[#14396a] font-[Arial] text-[15px] font-bold px-6 py-[6px] no-underline w-full outline-none'>
          Continuar pedido
        </button>
      </div>
    </section>
  );
};

// margin: 0 0 0 10px;
// color: rgba(0,0,0,0.4);
// cursor: pointer;
