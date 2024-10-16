import './App.css';
import Nav from './componenets/Nav';
import Footer from './componenets/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './componenets/SignUp';
import PrivateComponent from './componenets/PrivateComponent';
import Login from './componenets/Login';
import AddProduct from './componenets/AddProduct';
import ProductList from './componenets/ProductList';
import UpdateProduct from './componenets/UpdateProduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      
      <Routes>
        <Route element={<PrivateComponent />}>
        <Route path='/' element={<ProductList />} />
        <Route path='/add' element={<AddProduct />}/>
        <Route path='/update/:id' element={<UpdateProduct />}/>
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
