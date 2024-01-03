import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Menu from './components/Menu/Menu';

const Layout = () => {
  const[clicked,isClicked] = useState(false)
  return (
    <div className='app'>
  <Navbar clicked={clicked} isClicked={isClicked}/>
  {clicked?<Menu/> :null}
    <Outlet />
    <Footer/>  
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      
    ]
  },
  

  
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
     
    </div>
  );
}


export default App;
