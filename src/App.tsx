import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Worker from './pages/Worker';
import Order from './pages/Order'

import Store from './pages/Store';

import WorkerList from './pages/WorkerList'
import NewWorker from './pages/NewWorker'


function App() {
  //const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/order' element={<Order />} />
            <Route path='/worker/:id' element={<Worker />} />
            <Route path='/newworker' element={<NewWorker />} />
            <Route path='/store' element={<Store />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/workerlist" element={<WorkerList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
