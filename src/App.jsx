import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Home from "./layout/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
