import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const About = () => {

    /* Kayan yazılar*/
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const toRotate = ["Ben Kimim", "Neler Yapıyorum", "Hayat Hikayem"];
const [text, setText] = useState('');
const [delta, setDelta]= useState(300-Math.random()*100);
const period = 1000;
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
        setDelta(200);
    }
}
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>HAKKIMDA</p>
                <h2 className='py-4'>{text}</h2>
                <p className='py-2 text-gray-600'>Yazılım ile ilk tanışmam İnşaat Mühendisliği okurken 2018 yılında programlama dersi almamla başladıç Ardından hobi olarak bu alana yönelmeye ve freelance işler almaya başladım. Üniversitemi 3.56 ortalama ve toplamda 3.5 sene okuyarak birincilikle bitirdim. Okul hayatım bittikten sonra inşaat sektöründe bir süre çalıştıktan sonra tamamen yazılım sektörüne geçme kararı aldım. </p>
                <p className='py-2 text-gray-600'>Üsküdar Üniversitesinde Nitelikli Bilişim Uzmanı adı altında “Web ve Mobil Programlama” kursuna katıldım. Yine aynı şekilde Turkcell Akademi ve Btk Akademinin vermiş olduğu birçok kursa katıldım ve başarı ile tamamladım. Almış olduğum eğitimler doğrultusunda projeler yaparak ve freelance işler alarak edinmiş olduğum bilgileri hayata döktüm. Benimle iletişime geçildiği zaman yeteneklerim ve çalışma disiplinim ile katkı sağlayabileceğim noktasında şüpheniz olmasın. </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex item-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className="rounded-xl" src="/../public/assets/PROFILE.png" width='550' height='450'/>
            </div>
        </div>
    </div>
  )
}

export default About