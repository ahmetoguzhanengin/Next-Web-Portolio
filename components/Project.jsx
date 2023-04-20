
import React from 'react'
import ProjectItems from './ProjectItems';
import Blog from '../public/assets/projects/Blog.PNG';
import AdminDb from '../public/assets/projects/AdminDashboard.JPG';
import WriterDb from '../public/assets/projects/WriterDashboard.PNG';
import NetPer from '../public/assets/projects/aspKisiselWeb.PNG';
import NetAdmin from '../public/assets/projects/aspAdmin.PNG';
import ReactPW from '../public/assets/projects/ReactPersonalWeb.PNG'
import Atmosware from '../public/assets/projects/Atmosware.PNG'
import YNC from '../public/assets/projects/YeniNesil.PNG'
import Advice from '../public/assets/projects/reactAdviceProject.PNG'
import Hotel from '../public/assets/projects/HotelService.PNG'
 const Project = () => {
   return (
      <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-center text-[#5651e5]'>
          Projeler
        </p>
        <h2 className='py-4 text-center'>Şuana Kadar Neler Yaptım</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItems
            title='Asp.Net Core 5.0 İle Blog Projesi'
            backgroundImg={Blog}
            projectUrl='/blog'
            tech='React JS'
          />
          <ProjectItems
            title='Asp.Net Core 5.0 İle Admin Dashboard'
            backgroundImg={AdminDb}
            projectUrl='/admin'
            tech='React JS'

          />
          <ProjectItems
            title='Asp.Net Core 5.0 İle Writer Dashboard'
            backgroundImg={WriterDb}
            projectUrl='/writer'
            tech='React JS'

          />
            <ProjectItems
            title='Atmosware Firması İçin Web Site Tasarımı'
            backgroundImg={Atmosware}
            projectUrl='/atmosware'
            tech='React JS'

          />
            <ProjectItems
            title='Kişisel Web Sitem İçin Portfolio Tasarımı'
            backgroundImg={ReactPW}
            projectUrl='/portfolio'
            tech='React JS'

          />
            <ProjectItems
            title='Asp.Net kullanarak Admin Panelli Basit Web Site Tasarımı'
            backgroundImg={NetPer}
            projectUrl='/netpersonal'
            tech='React JS'

          />
              <ProjectItems
            title='Asp.Net kullanarak Admin Panelli Basit Web Site Tasarımı'
            backgroundImg={NetAdmin}
            projectUrl='/netadmin'
            tech='React JS'

          />
          <ProjectItems
            title='Bir Girişim Projesi İçin React İle Yapmış Olduğum Frontend Tasarımı '
            backgroundImg={YNC}
            projectUrl='/ync'
            tech='React JS'
          />
            <ProjectItems
            title='Hotel Servis Web API '
            backgroundImg={Hotel}
            projectUrl='/hotelservice'
            tech='React JS'
          />
              <ProjectItems
            title='Random Advice Project'
            backgroundImg={Advice}
            projectUrl='/advice'
            tech='React JS'
          />
          
        </div>
      </div>
    </div>
   )
 }
 
 export default Project


 /**********
     <div id='projects'className='w-full h-full '>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className=' md:text-center text-xl tracking-widest uppercase text-[#5651e5]'>Projeler</p>
            <h2 className='py-4 md:text-center'>Şuana Kadar Neler Yaptım</h2>
            <div className='grid md:grid-cols-2 gap-8'>


             
               <div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Swiper
                // install Swiper modules
                modules={[ Pagination,  A11y]}
                spaceBetween={1500}
                slidesPerView={1}
                pagination={{ clickable: true }}
                
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              > <SwiperSlide>
<Image className="rounded-xl group-hover:opacity-10" src={Blog} alt="/" />
</SwiperSlide>
<SwiperSlide>
<Image className="rounded-xl group-hover:opacity-10" src={AdminDb} alt="/"/>
</SwiperSlide>
<SwiperSlide>
<Image className="rounded-xl group-hover:opacity-10" src={WriterDb} alt="/"/>
</SwiperSlide>
</Swiper>
<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
   <h3 className='text-2xl text-white tracking-wider text-center'>Asp.Net Core 5.0 İle Blog Projesi</h3>
   <p className='pb-4 pt-2 text-white text-center'>Asp.Net Core 5.0 ile yapılmış kendi içinde admin ve yazar kontrol paneline sahip aynı zamanda mesajlaşma mekanizması bulunan blog projesi.</p>
   <Link href="/blog">
       <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Detaylar</p>
   </Link>
</div>
</div>

<div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Swiper
                // install Swiper modules
                modules={[ Pagination,  A11y]}
                spaceBetween={1500}
                slidesPerView={1}
                pagination={{ clickable: true }}
                
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              > <SwiperSlide>
<Image className="rounded-xl group-hover:opacity-10" src={NetPer} alt="/"/>
</SwiperSlide>
<SwiperSlide>
<Image className="rounded-xl group-hover:opacity-10" src={NetAdmin} alt="/"/>
</SwiperSlide>
</Swiper>
<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
   <h3 className='text-2xl text-white tracking-wider text-center'>Admin Panelli Kişisel Web Projesi</h3>
   <p className='pb-4 pt-2 text-white text-center'>Admin panelinden ikonları içeriği ve resminizi güncelleyebildiğiniz kişisel web projesi.</p>
   <Link href="/blog">
       <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Detaylar</p>
   </Link>
</div>
</div>
           
<div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
 
<Image className="rounded-xl group-hover:opacity-10" src={ReactPW} alt="/"/>

<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
   <h3 className='text-2xl text-white tracking-wider text-center'>Kişisel Web Projesi</h3>
   <p className='pb-4 pt-2 text-white text-center'>React ile tasarlamış olduğum bu projeyi önceden kişisel portfolyom olarak kullanmaktaydım.</p>
   <Link href="/blog">
       <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Detaylar</p>
   </Link>
</div>
</div>     

<div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
 
<Image className="rounded-xl group-hover:opacity-10" src={Atmosware} alt="/"/>

<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
   <h3 className='text-2xl text-white tracking-wider text-center'>
Atmosware Firması Site Tasarımı</h3>
   <p className='pb-4 pt-2 text-white text-center'>React kullanarak Atmosware firmasının sitesinin tekrardan tasarlanma projesidir.</p>
   <Link href="/blog">
       <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Detaylar</p>
   </Link>
</div>
</div> 

<div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
  
  <Image className="rounded-xl group-hover:opacity-10" src={Advice} alt="/"/>
  
  <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
     <h3 className='text-2xl text-white tracking-wider text-center'>
     React Random Advice Projesi</h3>
     <p className='pb-4 pt-2 text-white text-center'>React ile yapılmış olan bu projede her tıkladığınızda size rastgele bir advice vermektedir.</p>
     <Link href="/blog">
         <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Detaylar</p>
     </Link>
  </div>
  </div> 

 
 <div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
  
 <Image className="rounded-xl group-hover:opacity-10" src={ToDo} alt="/"/>
 
 <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
    <h3 className='text-2xl text-white tracking-wider text-center'>
    To Do List Project</h3>
    <p className='pb-4 pt-2 text-white text-center'>Javascript ile yapılmış bu ufak projeyi eklenti olarak projelerine ekleyip kullanabilirsiniz.</p>
    <Link href="/blog">
        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Detaylar</p>
    </Link>
 </div>
 </div> 
 
 <div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
  
 <Image className="rounded-xl group-hover:opacity-10" src={Car} alt="/"/>
 
 <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
    <h3 className='text-2xl text-white tracking-wider text-center'>
    Araba Satış Sitesi Back-End Projesi</h3>
    <p className='pb-4 pt-2 text-white text-center'>Bir araba satış sitesinin back-end kısmını yapmış olduğum projedir. Detayına Github hesabımdan ulaşabilirsiniz.</p>
    <Link href="/blog">
        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Detaylar</p>
    </Link>
 </div>
 </div> 
  
 <div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
  
 <Image className="rounded-xl group-hover:opacity-10" src={Hotel} alt="/"/>
 
 <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
    <h3 className='text-2xl text-white tracking-wider text-center'>
    Hotel Service Web API</h3>
    <p className='pb-4 pt-2 text-white text-center'>Hotel servis hizmetleri için bir web API service projesi</p>
    <Link href="/blog">
        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Detaylar</p>
    </Link>
 </div>
 </div> 


            
            </div>
        </div>
     </div>
 *******************/
