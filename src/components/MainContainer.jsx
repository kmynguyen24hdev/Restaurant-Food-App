import { useStateValue } from "../context/StateProvider";
import HomeContainer from "./HomeContainer";
import MenuContainer from "./MenuContainer";
import SliderBanner from "./SliderBanner";

const MainContainer = () => {
  const [{foodItems}, dispatch] = useStateValue();

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <SliderBanner data={foodItems} />
      <MenuContainer />
    </div>
  );
};

export default MainContainer;
