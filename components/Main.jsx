import React from 'react'
import { useState, useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaYoutube, FaDiscord } from 'react-icons/fa';
const Main = () => {
/* Kayan yazılar*/
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const toRotate = ["Front-End", "Back-End", "Full-Stack"];
const [text, setText] = useState('');
const [delta, setDelta]= useState(300-Math.random()*100);
const period = 2000;
useEffect(()=>{
    let ticker = setInterval(() =>{
        tick();
    },delta)
    return () => {clearInterval(ticker)};
}, [text])
const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length-1):fullText.substring(0, text.length+1);
    
    setText(updateText);

    if (isDeleting){
        setDelta(prevDelta => prevDelta/2)
    }
    if(!isDeleting && updateText === fullText){
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting && updateText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }
}
/* */
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Web Portfolyoma Hoş Geldin!</p>
                <h1 className='py-4 text-gray-700'>Merhaba! Ben <span className='text-[#5651e5]'>Ahmet Oğuzhan Engin</span></h1>
                <h1 className='py-4 text-gray-700'><span className='wrap'> {text}</span> Developer'ım</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>Ben bir Web Developer'ım. İlginç tasarımlar yaparak projelerimi responsive hale getiriyorum. Kullanıcıların ihtiyaçlarına uygun tasarımlar sunarak en iyi sonuçları elde etmeyi hedefliyorum. Yeni teknolojilere ve trendlere açığım ve müşterilerime en kaliteli hizmeti sunmak için çalışıyorum. </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                 
                <a
                    href='https://www.linkedin.com/in/ahmet-o%C4%9Fuzhan-engin-267667184/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>   
                  <a
                    href='https://github.com/ahmetoguzhanengin'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/@ahmetoguzhanengin"
                    target='_blank'
                    rel='noreferrer'
                  >
                   <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                   <FaYoutube/>
                   </div> 
                   </a>
                   <a
                    href="https://discord.gg/YewzCcgTFs"
                    target='_blank'
                    rel='noreferrer'
                  >
                   <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                   <FaDiscord/>
                   </div> 
                   </a>
                           
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default Main