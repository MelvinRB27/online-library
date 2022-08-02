import './App.css';
import Footer from './components/Footer';
import BarNav from './components/BarNav';
import Header from './components/Header';

//pages
import Home from './pages/home';
import Offers from './pages/offers';
import AboutUs from './pages/aboutUs';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import User from './components/User';
import UpdateRegister from './pages/updateRegister';
import SearchBook from './pages/SearchBook'
import PageNotFound from './pages/paneNotFound';


import { Routes, Route} from "react-router-dom";

const App = () =>  (
  <div className='containerApp'>
    <Header />
    <BarNav/>
    <br/>
    <br/>
    <Routes>
      <Route path="/" element={<Home  url="books"/>} />
      <Route path="/books" element={<SearchBook  />}/>
      <Route path="/offers" element={<Offers />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/update_Register" element={<UpdateRegister />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    <br/>

    <Footer />
    
  </div>
);


export default App;