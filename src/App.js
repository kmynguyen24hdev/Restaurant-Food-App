import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateItem from "./components/CreateItem";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="w-screen flex flex-col bg-primary">
      <Header />
      <main className="mt-24 w-full p-8">
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateItem />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
