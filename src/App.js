import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import InputPersons from './routes/InputPersons';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/inputPersons' element={<InputPersons />} />
    </Routes>
  );
}

export default App;
