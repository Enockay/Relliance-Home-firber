import { useState } from 'react'
import "./App.css";
import Header from './header';
import Body from './body';
import Middle from './Middle';
import Packages from './Packages';
import Contact from './Contact-us';
import BookPage from './Bookpage';

function App() {
  const [showPackages, setShowPackages] = useState(true);
  const [showBookPage, setShowBookPage] = useState(false);

  const handleSubscribeClick = () => {
    setShowPackages(false);
    setShowBookPage(true);
  };

  const handleBackToPackagesClick = () => {
    setShowPackages(true);
    setShowBookPage(false);
  };

  return (
    <>
    <Header/>
    <Body/>
    <Middle/>
    <div className='body-Main'>
        {showPackages && <Packages onSubscribeClick={handleSubscribeClick} />}
        {showBookPage && <BookPage onBackClick={handleBackToPackagesClick} />}
      </div>
    <Contact/>
    </>
  )
}

export default App
