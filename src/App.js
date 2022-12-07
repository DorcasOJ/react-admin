import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Topbar from './components/topBar/Topbar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';

function App() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/users' element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
