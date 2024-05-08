import { products } from "@/utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import ProductCard from "./components/products/ProductCard";
import Carousel from "./components/carousel/Carousel";
import Contact from "./components/contact/Contact";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <div>
      <div>
        <Carousel/>
      </div>
      <div className="p-8">
        <Container>
          <div>
            <HomeBanner/>
          </div>
          <div>
            <Categories/>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {products.map((product: any) => {
              // eslint-disable-next-line react/jsx-key
              return <ProductCard data={product} />
            })}
          </div>
        </Container>
      </div>
    </div>
    
  );
}
