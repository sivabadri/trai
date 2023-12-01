
import React from 'react';
import Main from './Main/main';
import { BrowserRouter, Route,Routes} from 'react-router-dom'; 
import Login from './Login/login';
import Signup from './signup/signup';
import About from './about/about';
import Showdata from './table/Showdata';
import Delete from './delete/delete';
import Ticketbook from './ticket/ticket';
import Ticketshow from './t1/table1';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/ticket' element={<Ticketbook/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/showdata' element={<Showdata/>}/>
      <Route path='/t1' element={<Ticketshow/>}/>
    </Routes>
  </BrowserRouter>
  // <div>
  // <Ticketshow/>
  // </div>
  
  );
}

export default App;
