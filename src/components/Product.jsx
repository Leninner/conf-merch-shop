export const Product = ({ image, title, price, description }) => {
  return (
    <div className='no-underline shadow-[8px_14px_38px_rgba(39,44,49,0.06),_1px_3px_8px_rgba(39,44,49,0.03)] rounded-[5px] mb-5 relative'>
      <img src={image} alt={title} className='w-full h-[200px] rounded-tl rounded-tr object-contain' />
      <div className='p-[10px]'>
        <h2 className='text-[18px] font-bold flex justify-between'>
          {title}
          <span className='text-[#33b13a]'>$ {price}</span>
        </h2>
        <p className='text-[14px] font-light'>{description}</p>
      </div>
      <button
        type='button'
        className='bg-[linear-gradient(to_bottom,_#63b8ee_5%,_#468ccf_100%)] w-full p-[10px] rounded-bl rounded-br border-0 outline-none text-[14px] font-light hover:bg-[rgba(39,_44,_49,_0.06)] '>
        Comprar
      </button>
    </div>
  );
};
