import React from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaYoutube, FaDiscord } from 'react-icons/fa'
const Footer = () => {
  return (
    <div>
    <footer class=" rounded-lg shadow m-4 bg-[#ecf0f3]">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-700 sm:text-center dark:text-gray-700">© 2023 Tüm Hakları Saklıdır.
        </span>

                   
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
     
    </footer>
    </div>
  )
}

export default Footer