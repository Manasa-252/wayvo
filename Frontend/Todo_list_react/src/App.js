import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Todo from './Components/Todo';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  </BrowserRouter>
     </> 
  );
}

export default App;
