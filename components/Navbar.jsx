import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaYoutube, FaDiscord } from 'react-icons/fa'
import { useRouter } from 'next/router';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

    const handleNav = () =>{
        setNav(!nav)
    };
    useEffect(() => {
           if (
            router.asPath === '/blog' ||
            router.asPath === '/admin' ||
            router.asPath === '/writer' ||
            router.asPath === '/atmosware'||
            router.asPath === '/portfolio'||
            router.asPath === '/netpersonal'||
            router.asPath === '/netadmin'||
            router.asPath === '/ync'||
            router.asPath === '/hotelservice'||
            router.asPath === '/advice'
             ) {
             setNavBg('transparent');
        setLinkColor('#ecf0f3');
           } else {
             setNavBg('#ecf0f3');
             setLinkColor('#1f2937');
           }
         }, [router]);
      
    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);
  return (

    <div   style={{ backgroundColor: `${navBg}` }} className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href="/">
        <Image src="/../public/assets/LOGO.png" alt="/" width='60' height='60'/>
                </Link>
       
         <div>
            <ul  style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Ana Sayfa</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>Hakkımda</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Yetenekler</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projeler</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/resume'>ÖZGEÇMİŞ</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>İLETİŞİM</Link>
            </li>
            </ul>
               {/* Hamburger Icon */}
            <div  style={{ color: `${linkColor}` }} onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25}/>
            </div>

         </div>
        </div>
        {/* Mobile Menu */}
      {/* Overlay */}
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
                {/* Side Drawer Menu */}
           <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                               : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}> 
              <div>
                <div className='flex w-full items-center justify-between'>
                <Link href="/">
                <Image src="/../public/assets/LOGO.png" alt="/" width='60' height='60'/>
                </Link>
                
                 <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose/>
                  </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Hadi beraber tarihe adımızı yazalım!</p>
                </div>
              </div>
              <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                    <Link href="/">
                        <li onClick={()=>setNav(false)} className='py-4 text-sm'>ANA SAYFA</li>
                    </Link>
                    <Link href="#about">
                        <li onClick={()=>setNav(false)} className='py-4 text-sm'>HAKKIMDA</li>
                    </Link>
                    <Link href="#skills">
                        <li onClick={()=>setNav(false)} className='py-4 text-sm'>YETENEKLER</li>
                    </Link>
                    <Link href="#projects">
                        <li onClick={()=>setNav(false)} className='py-4 text-sm'>PROJELER</li>
                    </Link>
                    <Link href="/resume">
                        <li onClick={()=>setNav(false)} className='py-4 text-sm'>ÖZGEÇMİŞ</li>
                    </Link>
                    <Link href="#contact">
                        <li onClick={()=>setNav(false)} className='py-4 text-sm'>İLETİŞİM</li>
                    </Link>
                </ul>
                <div className='pt-10'>
                    <p className='uppercase tracking-widest text-[#5651e5]'>BENİMLE İLETİŞİME GEÇİN</p>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <a
                    href='https://www.linkedin.com/in/ahmet-o%C4%9Fuzhan-engin-267667184/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>   
                  <a
                    href='https://github.com/ahmetoguzhanengin'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/@ahmetoguzhanengin"
                    target='_blank'
                    rel='noreferrer'
                  >
                   <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                   <FaYoutube/>
                   </div> 
                   </a>
                   <a
                    href="https://discord.gg/YewzCcgTFs"
                    target='_blank'
                    rel='noreferrer'
                  >
                   <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                   <FaDiscord/>
                   </div> 
                   </a>
                    </div>
                </div>
              </div>
           
           </div>
        </div>
    </div>

  )
}

export default Navbar

