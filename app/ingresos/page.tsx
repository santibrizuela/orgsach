import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import { products } from "@/utils/products";
import ProductCard from "../components/products/ProductCard";
import TopImage from "@/public/headerImg.png"
import Image from "next/image";

const Ingresos = async () => {
    const currentUser = await getCurrentUser();
    return ( 
        <div>
            <div className='w-full h-full text-center'>
                <div className='w-screen h-[30vh] lg:h-[40vh] top-0'>
                    <div className='absolute top-30 w-full h-[30vh] lg:h-[40vh] z-10'/>
                    <Image className='h-full w-full object-cover' src={TopImage} alt='Catalogo completo'/>
                    <div className='absolute top-[14%] lg:top-[24%] max-w-[1240px] w-full text-white z-20 p-2 text-left'>
                        <h2 className='p-2 font-bold text-gradient text-[2.6rem] uppercase text-yellow-500'>Ingresos</h2>
                    </div>
                </div>
            </div>
            <Container>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-2">
                    {products.map((product: any) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </Container>
        </div>
     );
}
 
export default Ingresos;