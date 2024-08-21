
import './App.css';
import Oil_and_gas from './orion-services/oil-and-gas';
import It from './it/it';
import Construction from './construction/construction';
import Trading_Investment from './trading_investment/trading_investment';
import About_us from './about_us/about_us';



// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/services/aboutus" element={<About_us />} />
        <Route path="/services/oil_and_gas" element={<Oil_and_gas />} />
        <Route path="/services/it" element={<It />} />
        <Route path="/services/construction" element={<Construction />} />
        <Route path="/services/trading_and_investment" element={<Trading_Investment />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
