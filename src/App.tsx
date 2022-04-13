import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import {CssBaseline} from "@mui/material";
import Dev from "./pages/dev";

function App() {
  return (
      <>
          <CssBaseline />
          <Router>
              <Routes>
                  <Route path="/" element={<Dev/>} />
                  <Route path="/home" element={<Home/>} />
                  <Route path="/signin" element={<SigninPage />} />
              </Routes>
          </Router>
      </>

  );
}

export default App;
