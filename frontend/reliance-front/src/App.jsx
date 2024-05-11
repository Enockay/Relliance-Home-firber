import { useState } from 'react'
import "./App.css";
import Header from './header';
import Body from './body';
import Middle from './Middle';
import Packages from './Packages';
import Contact from './Contact-us';

function App() {
const [ showBookNow , setShowBookNow ] = useState(false)

  return (
    <>
    <Header/>
    <Body/>
    <Middle/>
    <div className='body-Main'>
     <Packages/>
    </div>
    
    <Contact/>
    </>
  )
}

export default App
