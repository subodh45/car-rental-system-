import logo from './logo.svg';
import './App.css';
import {Route , BrowserRouter , Redirect} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import About from './pages/About';
import UserBookings from './pages/UserBookings';
import 'antd/dist/antd.css';
import Terms from './pages/Terms';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import Chat from './components/Chat';


function App() {
  return (
    <div className="App">

         <Chat/>
         
         <BrowserRouter>
             
             <Route path='/home' exact component={Home} />
             <Route path='/login' exact component={Login} />
             <Route path='/' exact component={Login} />
             <Route path='/register' exact component={Register} />
             <Route path='/booking/:carid' exact component={BookingCar} />
             <Route path='/userbookings' exact component={UserBookings} />
             <Route path='/about' exact component={About} />
             <Route path='/terms' exact component={Terms} />
             <Route path='/addcar' exact component={AddCar} />
             <Route path='/admin' exact component={AdminHome} />
             <Route path='/editcar/:carid' exact component={EditCar} />
             
             
             
         </BrowserRouter>

    </div>
  );
}



export default App;


/*export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Redirect to='/login'/>
    }

}













































/*import logo from './logo.svg';
import './App.css';

import {Route , BrowserRouter , Routes  } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import 'antd/dist/antd.css';
import Base from 'antd/lib/typography/Base';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
             <Routes>
                 <Route path='/home' element= {<Home />} />
                 <Route path='/login' element= {<Login />} />
                 <Route path='/' element= {<Login />} />
                 <Route path='/register' element= {<Register />} />
                 <Route path='/booking/:carid' element= {<BookingCar />} />
             </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;

/*export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
       <Navigate to="/login"/>
    }

}*/

