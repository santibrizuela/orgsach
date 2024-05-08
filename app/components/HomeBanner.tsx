import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const HomeBanner = () => {
    return ( 
        <div className="relative bg-gradient-to-t from-gray-400 to-yellow-400 mb-8 rounded-md">
            <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                <div className="mb-8 md:mb-0 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Plan de Ahorro</h1>
                    <p className="text-lg md:text-xl text-white mb-2">Comprá tu 0km en</p>
                    <Link className="flex justify-center text-yellow-400 home-banner-link" href="/plandeahorro">
                        <p className="text-2xl md:text-5xl font-bold">120 Cuotas</p>
                        <FaArrowRight className="ml-2 self-center md:text-[60px] align-middle" />
                    </Link>
                </div>
                <div className="w-1/3 relative aspect-video">
                    <Image
                        src="/sachLogo.png"
                        fill
                        alt="Banner Image"
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default HomeBanner;