import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useAuthContext, Privileges } from './hooks/useAuthContext';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Worker from './pages/Worker/Worker';

import Order from './pages/Order/OrderList';
import NewOrder from './pages/Order/NewOrder';
import EditOrder from './pages/Order/EditOrder';
import OrderHistory from './pages/Order/OrderHistory';

import Store from './pages/Stores/Store';
import EditStore from './pages/Stores/EditStore';
import SendEmail from './pages/Stores/SendEmail';
import NewStore from './pages/Stores/NewStore';
import InfoStore from './pages/Stores/InfoStore';

import Item from './pages/Item';

import WorkerList from './pages/Worker/WorkerList'
import NewWorker from './pages/Worker/NewWorker'
import EditWorker from './pages/Worker/EditWorker';





function App() {
  const { user }:any = useAuthContext();

  const isUser = (priv: Privileges): boolean => {
    if(user == null)
      return false;
    if(priv === user.tipas){
      return true;
    }
    return false;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path='/order' element={(isUser(Privileges.Worker) || isUser(Privileges.Admin)) ? <Order /> : <Navigate to="/login" />} />
            <Route path='/neworder' element={(isUser(Privileges.Worker) || isUser(Privileges.Admin)) ? <NewOrder /> : <Navigate to="/login" />} />
            <Route path='/editorder/:id' element={(isUser(Privileges.Worker) || isUser(Privileges.Admin)) ? <EditOrder /> : <Navigate to="/login" />} />
            <Route path='/orderhistory' element={isUser(Privileges.User) ? <OrderHistory /> : <Navigate to="/login" />} />

            <Route path='/worker/:id' element={(isUser(Privileges.Worker) || isUser(Privileges.Admin)) ? <Worker /> : <Navigate to="/login" />} />
            <Route path='/editworker/:id' element={isUser(Privileges.Admin) ? <EditWorker /> : <Navigate to="/login" />} />
            <Route path='/newworker' element={isUser(Privileges.Admin) ? <NewWorker /> : <Navigate to="/login" />} />
            <Route path="/workerlist" element={isUser(Privileges.Admin) ? <WorkerList /> : <Navigate to="/login" />} />

            <Route path='/store' element={isUser(Privileges.Admin) ? <Store /> : <Navigate to="/login" />} />
            <Route path="/newstore" element={isUser(Privileges.Admin) ? <NewStore /> : <Navigate to="/login" />} />
            <Route path="/infostore" element={isUser(Privileges.Admin) ? <InfoStore/> : <Navigate to="/login" />} />
            <Route path="/sendemail" element={isUser(Privileges.Admin) ? <SendEmail/> : <Navigate to="/login" />} />
            <Route path="/editstore/:id" element={isUser(Privileges.Admin) ? <EditStore /> : <Navigate to="/login" />} />

            <Route path='/item' element={isUser(Privileges.User) ? <Item /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
           
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
