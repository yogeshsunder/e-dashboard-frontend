import './App.css';
import Nav from './componenets/Nav';
import Footer from './componenets/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './componenets/SignUp';
import PrivateComponent from './componenets/PrivateComponent';
import Login from './componenets/Login';
import AddProduct from './componenets/AddProduct';
import ProductList from './componenets/ProductList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      
      <Routes>
        <Route element={<PrivateComponent />}>
        <Route path='/' element={<ProductList />} />
        <Route path='/add' element={<AddProduct />}/>
        <Route path='/update' element={<h1>Udate Product Listing Component</h1>}/>
        <Route path='/logout' element={<h1>Logout Component</h1>}/>
        <Route path='/profile' element={<h1>Profile Component</h1>}/>
        </Route>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
