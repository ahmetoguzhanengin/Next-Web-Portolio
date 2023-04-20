import React from 'react';
import Head from 'next/head';

import { FaGithub, FaLinkedinIn, FaFilePdf } from 'react-icons/fa';

const resume = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("AhmetOguzhanEngin_CV.pdf").then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = "AhmetOguzhanEngin_CV.pdf";
            alink.click();
        })
    })
}
  return (
    <>
      <Head>
        <title>Ahmet Oğuzhan Engin | Özgeçmiş</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Özgeçmiş</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Ahmet Oğuzhan Engin</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/ahmet-o%C4%9Fuzhan-engin-267667184/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/ahmetoguzhanengin'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Front-end Developer <span className='px-1'>|</span> Back-end Developer{' '}
              <span className='px-1'>|</span> Full-stack Developer
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Front-end Developer</p>
            <p className='py-2'>Back-end Developer</p>
            <p>Full-stack Developer</p>
          </div>
        </div>
        <p>
        Üsküdar Üniversitesi’nde İŞKUR destekli ve %100 Burslu olarak Nitelikli Bilişim
Uzmanı adı altında “Web ve Mobil Programlama” Eğitimine katıldım. Eğitim sürecim
içerisinde araştırma, öz motivasyon, girişimcilik ve farklı yetenekler edinme noktasında
kendimi geliştirdim Üniversite okurken Java dersi aldığım için Işık Ünivesitesi’nde
2018-2019 yılları arasında java dersi verdim. Şimdi ise Junior Software Developer
olarak kariyer hayatımda ilerlemekteyim. Yeni şeyler öğrenmeyi, yeteneklerimi
geliştirmeyi çok önemsiyorum. İstekli, özenli ve dikkatli çalışmanın mutlaka başarı ile
sonuçlanacağının bilincindeyim. Bu nedenle size yeteneklerim ve çalışma disiplinim ile
katkı sağlayabileceğim noktasında şüpheniz olmasın. İstanbul’da ofiste, hibrit veya
remote olacak şekilde çalışabileceğim iş aramaktayım.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Yetenekler</h5>
          <p className='py-2'>
            <span className='font-bold'>Teknik Yetenekler</span>
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>MSSQL
            <span className='px-2'>|</span>PostgreSql
            <span className='px-2'>|</span>Asp.Net
            <span className='px-2'>|</span>Asp.Net Core
            <span className='px-2'>|</span>Entity Framework
            <span className='px-2'>|</span>MVC
            <span className='px-2'>|</span>Rest API
            <span className='px-2'>|</span>C#
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span>Pyhon
            <span className='px-2'>|</span>Docker
            <span className='px-2'>|</span>Golang
          </p>
      
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Eğitim Bilgileri
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Üsküdar Üniversitesi
            </span>
            <span className='px-2'>|</span>Nitelikli Bilişim Uzmanlığı
          </p>
          <p className='py-1 italic'>Web ve Mobil Programlama (2022 - 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Algoritma ve C# ile back-end temelleri atıldı.
            </li>
            <li>
              Sql ile veritabanı işlemleri, sorgular öğrenildi.
            </li>
            <li>
              Html, Css ve JavaScript kullanılarak web in temelleri öğrenildi.
            </li>
            <li>
              .Net ve .Net Core ile Mvc-Katmanlı Mimari gibi konularla öğrenilmiş bilgiler birleştirilerek web programlama tamamlandı.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
             Anadolu Üniveristesi
            </span>
            <span className='px-2'>|</span>Yönetim Bilişim Sistemleri
          </p>
          <p className='py-1 italic'>Açık Öğretim (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              2.Üniversite olarak açıktan Yönetim Bilişim Sistemleri okumakayım. İkinci sınıftayım. 2025'de mezun olacağımı düşünmekteyim.
            </li>
          
          </ul>
        </div>
         {/* Personal Experience */}
         <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
             F.M.V Işık Üniveristesi
            </span>
            <span className='px-2'>|</span>İnşaat Mühendisliği
          </p>
          <p className='py-1 italic'>Örgün Öğretim (2017 - 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              İnşaat Mühendisliği bölümünü 3.56 ortalama ile toplam 3.5 sen okuyup bölüm birincisi olarak mezun oldum. Üniversite öğrenimim sırasında birçok başarıya imza attım. 
              </li>
          
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Katılınan Kurs ve Seminerler
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>BKM Akademi</span>
            <span className='px-2'>|</span>Online Eğitim
          </p>
          <p className='py-1 italic'> (2022 – 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            HTML5 ile Web Geliştirme
            </li>
            <li>
            CSSTemelleri
            </li>
            <li>
            C# Katılım
            </li>
            <li>
            Uygulamalarla SQL Öğreniyorum
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>BKM Akademi</span>
            <span className='px-2'>|</span>Online Eğitim
          </p>
          <p className='py-1 italic'> (2022 – 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Asp.Net Core MVC 101
            </li>
            <li>
            Java 101
            </li>
            <li>
            Java 201
            </li>
            <li>
            Python 101
            </li>
            <li>
            Python 201
            </li>
            <li>
            Python 301
            </li>
          </ul>
        </div>
        <h6 className='text-center  text-[18px] py-4'>
          Pdf Olarak İndir
        </h6> 
        <div className='flex justify-center pb-4'>
       
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
       
        <a onClick={onButtonClick}
                 
                  ><FaFilePdf className='text-[#5651e5]' size={30} /></a>
        </div>
        </div>
      </div>
    </>
  );
};

export default resume;