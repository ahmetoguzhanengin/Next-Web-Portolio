import React from 'react'
import Image from 'next/image'
const Skills = () => {
 
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
    <p className='md:text-center text-xl tracking-widest uppercase text-[#5651e5]'>Yetenekler</p>
        <h2 className='py-4 md:text-center'>Projelerimde Neler Kullanıyorum</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src="/../public/assets/skills/Html.png" width='64' height='64' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>HTML</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src="/../public/assets/skills/Css.png" width='64' height='64' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Css</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src="/../public/assets/skills/js.png" width='64' height='64' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>JavaScript</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src="/../public/assets/skills/tailwind.png" width='64' height='64' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Tailwind</h3>
            </div>
          </div>
        </div>
     
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/react.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/nextjs.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/node.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Node.js</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/c.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>C#</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/Net.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Asp.Net</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/Core.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Asp.Net Core</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/Sql.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Sql</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/PSQL.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Postgresql</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/KM.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Katmanlı Mimari</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/API.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>API</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/Python.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/Java.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Java</h3>
            </div>
        </div>
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default Skills

/*
<div className='w-full lg:h-screen p-2'>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Yetenekler</p>
        <h2 className='py-4'>Projelerimde Hangi {text} Kullanıyorum</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'></div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/Html.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/CSS.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/Js.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/react.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/node.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Node.js</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/c.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>C#</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/Net.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Asp.Net</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/Core.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Asp.Net Core</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/Sql.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Sql</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/PSQL.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Postgresql</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/KM.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Katmanlı Mimari</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/API.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>API</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/Python.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/../public/assets/skills/Java.png' width="64" height="64" alt="/"/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Java</h3>
            </div>
        </div>
        </div>


    </div>
    </div>*/