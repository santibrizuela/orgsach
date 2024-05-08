import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { ImLocation } from 'react-icons/im'

const Carousel = () => {
    return ( 
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('../../../headerImg.png')"}}>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div 
                    className='justify-center text-center'
                >
                    <h1 
                        className='text-[40px] font-bold text-yellow-500 leading-[0.8] md:text-[55px] w-min'
                        >
                        <a href='/' className='font-bold uppercase'><span className="">Organizacion</span><br/> <span className="">Sach</span></a>
                    </h1>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4 text-4xl'>
                        <a target='_blank' rel='noreferrer' href='https://wa.me/5491122502345?text=Hola!%20Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20veh%C3%ADculo%20publicado%20en%20la%20web.'>
                            <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineWhatsApp/>
                            </div>
                        </a>
                        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/sach_usados/'>
                            <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineInstagram/>
                            </div>
                        </a>    
                        <a target='_blank' rel='noreferrer' href='https://maps.app.goo.gl/Ck941TCPFEZTcBaP7'>
                            <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <ImLocation/>
                            </div>
                        </a>
                    </div>
                    
                    <a href='/ingresos'>
                        <div className='btn btn-primary m-1'>
                            <p className='p-2'>Ingresos</p>
                        </div>
                    </a>
                    <a href='#contact'>
                        <div className='btn btn-primary btn-outline m-1'>
                            <p className='p-2'>Contacto</p>
                        </div>
                    </a>

                </div>
            </div>
        </div>
     );
}
 
export default Carousel;