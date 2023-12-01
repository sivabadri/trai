import React from 'react'
import './main.css'
import Ticketshow from '../ticket/ticket'
export default function Main() {
  return (
    <div>
    <img id='pic3' src='https://blog-content.ixigo.com/wp-content/uploads/2019/07/0c2ea915a1d980fc572fa4558b0bbf8c-yaguw.jpg'></img>
    <img id='logo' src='https://i.pinimg.com/originals/6a/72/4b/6a724b9501764fd83a4abcd37b58144d.png'></img>
    <h1 id='head1'><div className='h1'>INDIAN RAILWAYS</div></h1>
    <div>
    <a href='/main' className='al1' id='home'><h1>HOME</h1></a>
    <a href='/about'  className='al1' id='about'><h1>ABOUT</h1></a>
    <a href='/ticket' className='al1' id='ticket'><h1>BOOKING</h1></a>
    <a href='/Login' className='al1'  id='Login'><h1>LOGIN</h1></a>
    <a href='/signup' className='al1' id='signup'><h1>SIGNUP</h1></a>
     <a href='/t1' className='al1'  id='show'><h1>BOOKED</h1></a>z
    </div>
   
    </div>
    
  )
}
