import './App.css';
import Nav from './componenets/Nav';
import Footer from './componenets/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './componenets/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      
      <Routes>
        <Route path='/' element={<h1>Product Listing Component</h1>}/>
        <Route path='/add' element={<h1>Add Product Listing Component</h1>}/>
        <Route path='/update' element={<h1>Udate Product Listing Component</h1>}/>
        <Route path='/logout' element={<h1>Logout Component</h1>}/>
        <Route path='/profile' element={<h1>Profile Component</h1>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
