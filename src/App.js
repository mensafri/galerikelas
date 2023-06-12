import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import InputPersons from "./routes/InputPersons";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/inputPersons" element={<InputPersons />} />
      </Route>
    </Routes>
  );
}

export default App;
