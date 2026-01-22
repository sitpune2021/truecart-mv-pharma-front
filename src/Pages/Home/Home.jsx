import HeroCarousel from "./Components/HeroCarousel/HeroCarousel";
import BrowseCategory from "./Components/BrowseCategory/BrowseCategory";
import SliderSection from "../../Components/SliderSection/SliderSection";
import { products } from "../../data/products";

// Filter products for different sections (replace with API calls later)
const newArrivals = products.filter((item) => [5, 8, 9, 12, 13, 18, 19, 20].includes(item.id));
const trending = products.filter((item) => [1, 2, 3, 4, 6, 7, 10, 11].includes(item.id));
const bestSellers = products.filter((item) => [14, 15, 16, 17, 21, 22, 23, 24].includes(item.id));

const Home = () => {
  return (
    <div className="home-page">
      <HeroCarousel />
      <BrowseCategory />
      <SliderSection
        title="New Arrivals"
        products={newArrivals}
        viewAllLink="/category/new-arrivals"
      />
      <SliderSection
        title="Trending Now"
        products={trending}
        viewAllLink="/category/trending"
      />
      <SliderSection
        title="Best Sellers"
        products={bestSellers}
        viewAllLink="/category/best-sellers"
      />
    </div>
  );
};

export default Home;
