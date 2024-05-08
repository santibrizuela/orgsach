import React from 'react'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import TopImage from "@/public/headerImg.png"
import Img1 from '@/public/headerImg.png';
import Img2 from '../assets/portfolioDivano2.png';
import Img3 from '../assets/portfolioResisten.png';
import Img4 from '@/public/categoriesplanesdepago.png';
import Img5 from '../assets/portfolioDivano.png';
import Img6 from '../assets/portfolioMadero.png';
import Img7 from '@/public/categoriesusadospremium.png';
import Img8 from '../assets/portfolioFood.png';
import Img9 from '../assets/portfolioSavino.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
// rugby data
const productos = [
  
    {
      name: 'Ingresos',
      description:
      'Catálogo de vehículos en stock.',
      cardimage: Img1,
      link:'ingresos',
    },{
      name: 'Planes de Pago',
      description:
      'Planes de ahorro en hasta 120 Cuotas.',
      cardimage: Img4,
      link:'planesdepago',
    },
    {
      name: 'Usados Premium',
      description:
       'Vehículos de Alta Gama.',
      cardimage: Img7,
      link:'usadospremium',
    },
]

const Categories = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 z-20'>
                {productos.map((service, index) => {
                // destructure service
                const { name, description, cardimage, link } = service;
                return (
                <div
                    className='max-2-[1240px] mx-auto p-2 gap-8 pt-2 z-0'
                    key={index}    
                >
                    {/* new card */}
                    {/* image */}
                        <div className='group relative overflow-hidden text-start
                         rounded-xl'>
                            {/* overlay */}
                            <div className=' group-hover:bg-black/70 w-full h-full absolute 
                            z-40 transition-all duration-300'></div>
                            {/* img */}
                            <Image 
                            className='group-hover:scale-125 transition-all duration-500' 
                            src={cardimage} 
                            alt='Agencia de vehículos' 
                            />
                            {/* title */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-16 lg:group-hover:bottom-16 transition-all duration-700 z-50'>
                            <span className='text-3xl font-bold text-yellow-400'>{name}</span>
                            </div>
                            {/* pretitle */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-24 transition-all duration-500 z-50'>
                            <span className='text-white'>{description}</span>             
                            </div>
                            {/* button */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-2 transition-all duration-700 z-50'>
                                <Link href={link}>
                                    <button className='btn btn-outline flex items-center align-middle navbar-btn'>
                                        <span className="md:text-xl">{name}</span>
                                        <span className="navbar-arrow"><FaArrowRight className="md:text-xl ml-2 self-center" /></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                </div>
                );
                })}
            </div>
  )
}

export default Categories