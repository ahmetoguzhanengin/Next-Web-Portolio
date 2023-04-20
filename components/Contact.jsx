import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Contactimage from '../public/assets/contact-img.png';
import { FaDiscord, FaGithub, FaLaughBeam, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';



import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Text,
    Textarea,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { sendContactForm } from "../lib/api";
  
  const initValues = { name: "", email: "", subject: "", message: "" };
  
  const initState = { isLoading: false, error: "", values: initValues };


const Contact = () => {

    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
  
    const { values, isLoading, error } = state;
  
    const onBlur = ({ target }) =>
      setTouched((prev) => ({ ...prev, [target.name]: true }));
  
    const handleChange = ({ target }) =>
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value,
        },
      }));
  
    const onSubmit = async () => {
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));
      try {
        await sendContactForm(values);
        setTouched({});
        setState(initState);
        toast({
          title: "Message sent.",
          status: "success",
          duration: 2000,
          position: "top",
        });
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.message,
        }));
      }
    };
  return (
    <div id='contact' className='w-full lg:h-screen'>
    <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className=' md:text-center text-xl tracking-widest uppercase text-[#5651e5]'>
            İLETİŞİM
        </p>
        <h2 className='py-4 md:text-center'>Bana Yazın</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
{/*left*/}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl py-4 '>
                <div className='lg:p-4 h-full '>
                    <div>
                    <Image className="rounded-xl hover:scale-105 ease-in duration-300 " src={Contactimage} width='500' height='400'/>
                    </div>
                    <div>
                        <h2 className='py-2 text-center'>Ahmet Oğuzhan Engin</h2>
                        <p className='py-2 text-center'><b>Web Developer</b></p>
                        <p className='py-4 text-center'>Ofisten, Hybrit ve Evden çalışabilecek iş pozisyonları için uygunu. İletişime geçin ve konuşalim.</p>
                    </div>
                    <div>
                <p className='uppercase pt-8 text-center'>BENİMLE İLETİŞİME GEÇİN</p>
                <div className='flex items-center justify-between py-4'>
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
        {/*Rigth*/}
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className="p-4">
            <Container  mt={12}>
            <div className='grid md:grid-cols-2 gap-4 py-4'>
  
  <div className='flex flex-col '>
    <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
      <FormLabel className='uppercase text-sm py-2' >Adınız Soyadınız</FormLabel>
      <Input
        type="text"
        name="name"
        errorBorderColor="red.300"
        value={values.name}
        onChange={handleChange}
        onBlur={onBlur}
        className='border-2 rounded-lg p-3 flex border-gray-300 w-full'
      />
      <FormErrorMessage>*Gerekli</FormErrorMessage>
    </FormControl>
    </div>
    <div className='flex flex-col '>
    <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
      <FormLabel  className='uppercase text-sm py-2' >MAİL ADRESİNİZ</FormLabel>
      <Input
        type="email"
        name="email"
        errorBorderColor="red.300"
        value={values.email}
        onChange={handleChange}
        onBlur={onBlur}
        className='border-2 rounded-lg p-3 flex border-gray-300 w-full'
      />
      <FormErrorMessage>*Gerekli</FormErrorMessage>
    </FormControl>
    </div>
    </div>
    <div className='flex flex-col py-2'>
    <FormControl
      mb={5}
      isRequired
      isInvalid={touched.subject && !values.subject}
    >
      <FormLabel className='uppercase text-sm py-2'>KONU</FormLabel>
      <Input
        type="text"
        name="subject"
        errorBorderColor="red.300"
        value={values.subject}
        onChange={handleChange}
        onBlur={onBlur}
        className='border-2 rounded-lg p-3 flex border-gray-300 w-full'
      />
      <FormErrorMessage>*Gerekli</FormErrorMessage>
    </FormControl>
    </div>
    <div className='flex flex-col py-2'>
    <FormControl
      isRequired
      isInvalid={touched.message && !values.message}
      mb={5}
    >
      <FormLabel  className='uppercase text-sm py-2'>MESAJINIZ</FormLabel>
      <Textarea
        type="text"
        name="message"
        rows={10}
        errorBorderColor="red.300"
        value={values.message}
        onChange={handleChange}
        onBlur={onBlur}
        className='border-2 rounded-lg p-3 border-gray-300 w-full'
      />
      <FormErrorMessage>*Gerekli</FormErrorMessage>
      
    </FormControl>
    </div>
    <Button
      variant="outline"
     
      isLoading={isLoading}
      disabled={
        !values.name || !values.email || !values.subject || !values.message
      }
      onClick={onSubmit}
      className='w-full p-4 text-gray-100 bg-[#5651e5] mt-4'
    >
      Gönder
    </Button>
    {error && (
      <Text color="red.300" my={4} fontSize="xl">
        {error}
      </Text>
    )}
  </Container>

            </div>
        </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href="/">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>

                    </div>
                </Link>
            </div>
                
        </div>
    
    

</div>

  
  )
}

export default Contact


