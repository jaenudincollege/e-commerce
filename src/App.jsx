import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
