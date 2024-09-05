import { useEffect, useState} from 'react'
import { redirect } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Footer from './Components/Footer';
import About from './Components/About';
import Categories from './Components/Categories'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AllProducts from './Components/AllProducts'
import Cart from './Components/Cart'
import Login from './Components/Login'
import Loading from './Components/Loading'
import Categorie from './Components/Categorie'
import NewLogin from './Components/NewLogin/NewLogin';




function App() {
  const [products, setProducts] = useState([]);
  const [log, setLog] = useState(false);
  const [load ,setLoad] = useState(false);
  const [catename , setCateName] = useState('');
  

  let base_URL = 'https://gorgeous-flight-api1.onrender.com/groceries';
 
  
  

    const fetchData = async(category_name)=>
    {
      setLoad(true);
      let comp_URL='';
      if(category_name === 'vegetable' || category_name === 'fruit')
       {
        comp_URL = base_URL+"?"+"category="+category_name;
        setCateName(category_name);
      }
      else if(category_name === 'dairy' || category_name === 'bakery')
      {
        category_name = category_name.charAt(0).toUpperCase()+category_name.substring(1);
        comp_URL = base_URL+"?"+"category="+category_name;
        setCateName(category_name); 
      }
      else
      {
        comp_URL = base_URL;
        setCateName(category_name);
      }
        const response = await fetch(comp_URL);
        const data = await response.json();
        setProducts(data);
        console.log(data);
        console.log(data[0]);
        setLoad(false);

    }
    
  return (
    <>
    <Router>
      <Navbar log={log} setLog={setLog} />
      <Routes>
          <Route path="/" element={<Main fetchData={fetchData} products={products}/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/categories" element={<Categories fetchData={fetchData} />}></Route>
          <Route path='/products' element={load===true?<Loading/>:<AllProducts products={products}/>}></Route>
          <Route path='/cart' element={log===false?<Login/>:<Cart fetchData={fetchData}/>}></Route>
          <Route path="/login" element={<Login setLog={setLog}/>}></Route>
          <Route path={`/category/${catename}`} element={load===true?<Loading/>:<Categorie products={products} category_name={catename}/>}></Route>
          
      </Routes>
      <Footer/>
    </Router>
    {/* <NewLogin/> */}
    </>
  )
}

export default App
