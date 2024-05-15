import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import Product from "./components/Product";
import { Login } from "./AdminPanel/Login";
import TablePage from "./dashboard/TablePage";
import AddProduct from "./dashboard/AddProduct";
import Dashboard from "./dashboard/Dashboard";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import ProductList from "./dashboard/ProductList";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/productlist" element={<ProductList />}></Route>
      </Routes>
       <Footer />
      
  
  
    </div>
  );
}

export default App;
