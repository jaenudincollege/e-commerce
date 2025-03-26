import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
