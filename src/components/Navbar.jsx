import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import pdf_logo from '../images/logo_1.pdf';
import png_logo from '../images/logo_1.png';

  const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 430;
  React.useEffect(() => {
  const handleResizeWindow = () => setWidth(window.innerWidth);
  // subscribe to window resize event "onComponentDidMount"
  window.addEventListener("resize", handleResizeWindow);
  return () => {
  // unsubscribe "onComponentDestroy"
  window.removeEventListener("resize", handleResizeWindow);
};
}, []);
  return (
    
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 py-16 text-white'>
      <div>{width > breakpoint ? <img src={png_logo} alt='logo' className='max-w-xl pb-2' /> : <img src={pdf_logo} alt='logo' className='max-w-[14rem] pb-1.5' />}</div>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-red-500'><a href='/'>Home</a></li>
        <li className='p-4 hover:text-red-500'><a href='Tutoring'>Tutoring</a></li>
        <li className='p-4 hover:text-red-500'><a href='Booking'>Booking</a></li>
        <li className='p-4 hover:text-red-500'><a href='About'>About</a></li>
        <li className='p-4 hover:text-red-500'><a href='Contact'>Contact</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden hover:text-red'>
          <span className='hover:text-red-500'>{nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}</span>
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-[#404040ff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <div>{width > breakpoint ? <img src={png_logo} alt='logo' className='w-fill px-2 py-4' /> : <img src={pdf_logo} alt='logo' className='w-fill px-2 py-4' />}</div>
          <li className='p-4 border-b border-gray-600 hover:text-red-500'><a href="/">Home</a></li>
          <li className='p-4 border-b border-gray-600 hover:text-red-500'><a href="Tutoring">Tutoring</a></li>
          <li className='p-4 border-b border-gray-600 hover:text-red-500'><a href="Booking">Booking</a></li>
          <li className='p-4 border-b border-gray-600 hover:text-red-500'><a href="About">About</a></li>
          <li className='p-4 hover:text-red-500'><a href="Contact">Contact</a></li>
      </ul>
    </div>
  );
};
//<div className='fixed bottom-0 text-sm'>{width > breakpoint ? <div className={!nav ? 'flex fixed bottom-0 py-4 text-sm' : 'invisible'}><p>&copy;&nbsp;</p><p className='font-sans'>2023</p><p>&nbsp;BlackburnTutors. All Rights Reserved.</p></div> : <div className={!nav ? 'flex fixed bottom-0 py-4 text-[0.6rem]' : 'invisible'}><p>&copy;&nbsp;</p><p className='font-sans'>2023</p><p>&nbsp;BlackburnTutors. All Rights Reserved.</p></div>}</div>
export default Navbar;