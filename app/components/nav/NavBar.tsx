import Link from "next/link";
import Container from "../Container";
import {Roboto} from "next/font/google";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Button from "@/app/components/Button";
import { ImLocation } from "react-icons/im";
import { FaArrowRight  } from 'react-icons/fa';

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
    const currentUser = await getCurrentUser();
  
    return ( 
        <div className="sticky top-0 w-full bg-zinc-900 z-30 shadow-sm">
            <div className="py-4 border-b[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md-gap-0">
                        <Link href="/" className={`${roboto.className} font-bold text-2xl text-yellow-400`}>Sach</Link>
                        <a 
                            href='/planesdepago'
                            className='uppercase'
                        >
                            <button className='btn btn-outline md:btn-lg flex items-center align-middle navbar-btn'>
                                <span className="md:text-xl">Planes </span>
                                <span className="navbar-arrow"><FaArrowRight className="md:text-xl ml-2 self-center" /></span>
                            </button>
                        
                        </a>
                        <div className="flex items-center gap-8 md:gap-12 ">
                            <Link className="text-yellow-400" href="/ingresos">Ingresos</Link>
                            <Link className="text-yellow-400" href="/usadospremium">Usados Premium</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default NavBar;