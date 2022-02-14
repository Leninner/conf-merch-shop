export const Information = () => {
  return (
    <div className='Information grid grid-cols-[3fr_1fr] gap-8 gap-y-[1.5em] mb-[4em]'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Informacion de contacto:</h2>
        </div>
        <div className='Information-form'>
          <form action=''>
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
          <div className='mt-[10px]'>Regresar</div>
          <div className='Information-next'>pagar</div>
        </div>
      </div>
      <div className='mt-[10px]'>
        <h3 className='text-[18px] mb-2'>Pedido:</h3>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-between w-full border-b border-white'>
            <h4 className='m-0'>ITEM Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};
