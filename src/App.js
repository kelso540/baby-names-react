import React,{useState} from 'react'; 
import './App.css';
import Data from './Data';   
import Logo from './Logo';
import NavBar from './NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './Contact';
import About from './About';

function App() {
  const [allNames, setAllNames] = useState(); 
  const [favoriteNames, setFavoriteNames] = useState([]);
  const [display, setDisplay] = useState(false); 
  const [favorites, setFavorites] = useState(false);
  const scrollToBottom = () => {
    window.scrollTo(0, 400);
  } 
  const handleFilter = (e) => {
    setDisplay(true); 
    let filtered = Data.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase())); 
    setAllNames(filtered); 
  }
  const getOnlyGirls = () => {  
    setDisplay(true);
    let filteredNames  = Data.filter(item=>item.sex === 'f');
    setAllNames(filteredNames); 
  }
  const getOnlyBoys = () => {
    setDisplay(true); 
    let filteredNames  = Data.filter(item=>item.sex === 'm');
    setAllNames(filteredNames);
  }
  const getAllNames = () => {
    setDisplay(true); 
    setAllNames(Data); 
  }
  const addToFavorites = (name) => {
    setFavorites(true); 
    const found = favoriteNames.some(item => item.id === name.id);

    if (!found) {
      setFavoriteNames([...favoriteNames, name])
    }
  }

  const removeFromFavorites = (name) => {
    const updatedFavorites = favoriteNames.filter(item => {
      return item.name !== name.name
    })
    setFavoriteNames(updatedFavorites); 
    if (updatedFavorites.length === 0){
      setFavorites(false); 
    }
  }



  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Logo getOnlyGirls={getOnlyGirls} getOnlyBoys={getOnlyBoys} getAllNames={getAllNames} handleFilter={handleFilter} favoriteNames={favoriteNames} removeFromFavorites={removeFromFavorites} favorites={favorites} display={display} allNames={allNames} addToFavorites={addToFavorites} scrollToBottom={scrollToBottom} /> } />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
