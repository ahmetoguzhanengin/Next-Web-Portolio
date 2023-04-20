import Image from 'next/image';
import React from 'react';
import Hotel from '../public/assets/projects/HotelService.PNG'

import {RiRadioButtonFill} from 'react-icons/ri';

const hotelservice = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/90 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={Hotel} alt=''/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] rigth-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Hotel Service Web API</h2>
                <h3>Asp.Net | Swagger | Postman</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Proje</p>
                <h2 className='mt-2'>Genel Bakış</h2>
                <p className='mt-4'>
                Bu projede bir hotel bulma uygulaması için Web API tasarladım. Hotel ile ilgili bilgileri JSON formatında listeledim ve get, post, put ve delete methodlarını yazıp postman uygulaması kullanarak test ettim. GitHub hesabımı inceleyerek detaylar ulaşabilirsiniz.
                </p>
                <a
                    href='https://github.com/ahmetoguzhanengin/Web_API_Template'
                    target='_blank'
                   
                  >
                    <div className='rounded-full shadow-lg mt-5 w-40 pl-4 text-gray-100 bg-[#5651e5] p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                      GitHub'da İncele
                    </div>
                  </a>   
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Teknolojiler</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Asp.Net</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Swagger</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Postman</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>C#</p>
     
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default hotelservice