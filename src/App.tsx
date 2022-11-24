import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useAuthContext } from './hooks/useAuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Worker from './pages/Worker';
import Order from './pages/Order'

import Store from './pages/Stores/Store';

import Item from './pages/Item';

import WorkerList from './pages/WorkerList'
import NewWorker from './pages/NewWorker'
import NewStore from './pages/Stores/NewStore';
import InfoStore from './pages/Stores/InfoStore';


function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/order' element={user ? <Order /> : <Navigate to="/login" />} />
            <Route path='/worker/:id' element={user ? <Worker /> : <Navigate to="/login" />} />
            <Route path='/newworker' element={user ? <NewWorker /> : <Navigate to="/login" />} />
            <Route path='/store' element={user ? <Store /> : <Navigate to="/login" />} />
            <Route path='/item' element={user ? <Item /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/workerlist" element={user ? <WorkerList /> : <Navigate to="/login" />} />
            <Route path="/newstore" element={user ? <NewStore /> : <Navigate to="/login" />} />
            <Route path="/infostore" element={user ? <InfoStore /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
