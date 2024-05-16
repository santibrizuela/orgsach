import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import { plandeahorro } from "@/utils/plandeahorro";
import ProductCard from "../components/products/ProductCard";
import TopImage from "@/public/categoriesplandeahorro.png"
import Image from "next/image";
import SachLogo from "@/public/sachLogo.png"

const Plandeahorro = async () => {
    const currentUser = await getCurrentUser();
    return ( 
        <div>
            <div className='w-full h-full text-center'>
                <div className='w-screen h-[30vh] lg:h-[40vh] top-0'>
                    <div className='absolute top-30 w-full h-[30vh] lg:h-[40vh] z-10'/>
                    <Image className='h-full w-full object-cover z-1' src={TopImage} alt='Planes de ahorro'/>
                    <div className='absolute top-[20%] max-w-[1240px] w-full text-white z-20 p-2 text-left'>
                        <Image className=" w-32 md:w-40 lg:w-80" src={SachLogo} alt="Organizacón Sach"/>
                        <h2 className='p-2 font-bold text-[2.6rem] uppercase text-yellow-500'>PLAN DE AHORRO</h2>
                    </div>
                </div>
            </div>
            <Container>
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-8 mt-2">
                    {plandeahorro.map((product: any) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </Container>
        </div>
     );
}
 
export default Plandeahorro;