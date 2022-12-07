import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Topbar from './components/topBar/Topbar';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
