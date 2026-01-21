import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import BrowseCategory from "../../Components/BrowseCategory/BrowseCategory";
import Trending from "../../Components/Trending/Trending";
import Recommended from "../../Components/Recommended/Recommended";
import NewArrival from "../../Components/NewArrival/NewArrival";



const Home = () => {
  return (
    <div className="home-page">
      <HeroCarousel />
      <BrowseCategory />
      <NewArrival />

      <Trending />
      <Recommended />
    </div>
  );
};

export default Home;
