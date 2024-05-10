import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const HomeBanner = () => {
    return ( 
        <div >
            <div className="mx-auto flex flex-col gap-2 md:flex-row items-end justify-evenly bg-cover bg-center relative mb-4" style={{ backgroundImage: "url('../../../carouselchevrolet1.jpg')"}}>
                <div className="mb-8 md:mb-0 text-center ease-in duration-300">
                   
                </div>
                <div className="w-1/3 relative aspect-video flex flex-col justify-end">
                    <Link className="flex justify-center text-yellow-400 home-banner-link ease-in duration-300" href="/plandeahorro">
                        <p className="text-2xl md:text-5xl font-bold ease-in duration-300">120 Cuotas</p>
                        <FaArrowRight className="ml-2 self-center md:text-[60px] align-middle ease-in duration-300" />
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default HomeBanner;