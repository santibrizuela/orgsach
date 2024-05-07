import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import { products } from "@/utils/products";
import ProductCard from "../components/products/ProductCard";

const Login = async () => {
    const currentUser = await getCurrentUser();
    return ( 
        <Container>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-2">
            {products.map((product: any) => {
              // eslint-disable-next-line react/jsx-key
              return <ProductCard data={product} />
            })}
          </div>
        </Container>
     );
}
 
export default Login;