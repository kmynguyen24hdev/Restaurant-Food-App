import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateItem from "./components/CreateItem";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { actionType } from "./context/reducer";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchFoodItems = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateItem />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
