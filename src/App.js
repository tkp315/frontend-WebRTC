
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/NewRoom';
import Room from './Pages/Room';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Home></Home>} path='/'></Route>
      <Route element={<Room></Room>} path='/room/:roomId'></Route>
      </Routes>
    </div>
  );
}

export default App;
