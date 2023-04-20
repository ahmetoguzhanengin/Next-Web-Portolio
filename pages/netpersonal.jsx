import Image from 'next/image';
import React from 'react';
import NetPer from '../public/assets/projects/aspKisiselWeb.PNG';

import {RiRadioButtonFill} from 'react-icons/ri';

const atmosware = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/90 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={NetPer} alt=''/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] rigth-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Asp.Net İle Admin Panelli Kisisel Web Sitesi</h2>
                <h3>Asp.Net | Html | Css</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Proje</p>
                <h2 className='mt-2'>Genel Bakış</h2>
                <p className='mt-4'>
                Asp.Net kullanarak tasarlamış olduğum bu projede kendi html css bilgimi güncel tutmak amacı ile basit bir pratik yapmış bulunmaktayım. Ayrıca admin paneli'de bulunan bu projede ana sayfadaki her bilgiyi ordan tekrar kod yazmadan düzenleyebilirsiniz. Projeyi incelemek için github hesabımı ziyaret edebilirsiniz.
                </p>
                <a
                    href='https://github.com/ahmetoguzhanengin/My-Personal-Web-Site'
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
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Html</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Css</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default atmosware