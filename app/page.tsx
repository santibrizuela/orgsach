import { plandeahorro } from "@/utils/plandeahorro";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import ProductCard from "./components/products/ProductCard";
import Carousel from "./components/carousel/Carousel";
import Categories from "./components/Categories";
import BannerChevrolet from "./components/bannerChevrolet/BannerChevrolet";

export default function Home() {
  return (
    <div>
      <div>
        <Carousel/>
      </div>
      
      <div className="p-8">
        <Container>
          <div>
            <Categories/>
          </div>
          <div>
            <HomeBanner/>
          </div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-8">
            {plandeahorro.map((product: any) => {
              // eslint-disable-next-line react/jsx-key
              return <ProductCard data={product} />
            })}
          </div>
        </Container>
      </div>
      <div>
        <BannerChevrolet/>
      </div>
    </div>
    
  );
}
