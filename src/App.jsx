import{BrowserRouter, Routes, Route} from'react-router-dom';
import Home from './pages/Home';
import Viewsalary from './pages/viewsalary';
import Payslip from './pages/payslip';

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Viewsalary" element={<Viewsalary />} />
    <Route path="/Payslip" element={<Payslip />} />
  </Routes>
  </BrowserRouter>
 
  );
  
}

