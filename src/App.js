import './index.css';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import NavbarItem from './components/NavbarComponent';
import Home from './pages/home';

function App() {
  return (<>
      <Router>
        <Routes>
          <Route exact path="/" element={<><NavbarItem/> <Home/></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
