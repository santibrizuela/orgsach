import Link from "next/link";
import Container from "../Container";
import {Redressed} from "next/font/google";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Button from "@/app/components/Button";
import { ImLocation } from "react-icons/im";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
    const currentUser = await getCurrentUser();
  
    return ( 
        <div className="sticky top-0 w-full bg-slate-700 z-30 shadow-sm">
            <div className="py-4 border-b[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md-gap-0 text-yellow-400">
                        <Link href="/" className={`${redressed.className} font-bold text-2xl`}>Sach</Link>
                        <a 
                            href='/catalogo'
                            className='uppercase'
                        >
                            <button className='btn btn-lg btn-outline flex items-center'>
                                Planes de Pago
                            </button>
                        
                        </a>
                        <div className="flex items-center gap-8 md:gap-12 ">
                            <Link href="/catalogo">Planes de Pago</Link>
                            <Link href="/usadospremium">Usados Premium</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default NavBar;