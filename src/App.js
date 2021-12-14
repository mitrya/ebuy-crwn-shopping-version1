import './App.css';
import HomePage from "./pages/homepage/homepage.component.jsx"
import {Routes,Route} from 'react-router-dom'

const Hatspage =props => {
  console.log(props);
  return (
    <div>
      Hatspage
    </div>
  );
}

const Jacketspage =props => {
  console.log(props);
  return (
    <div>
      Jacketspage
    </div>
  );
}

const Sneakerspage =props => {
  console.log(props);
  return (
    <div>
      Sneakerspage
    </div>
  );
}

const Womenspage =props => {
  console.log(props);
  return (
    <div>
      Womenspage
    </div>
  );
}

const Menspage =props => {
  console.log(props);
  return (
    <div>
      Menspage
    </div>
  );
}


function App() {
 
  let myInlineStyle={
    color:'black',
    fontSize:'40px',
    fontFamily:'Ariel',
    position:'absolute',
    top:'50%',
    left:'40%'
 }

  return (

    
    <Routes>
     
        <Route path="/" element={<HomePage/>} />
        <Route path="shop/hats" element={<Hatspage />} />
        <Route path="shop/jackets" element={<Jacketspage />} />
        <Route path="shop/sneakers" element={<Sneakerspage />} />
        <Route path="shop/womens" element={<Womenspage />} />
        <Route path="shop/mens" element={<Menspage />} />
        <Route path="*" element={<div style={myInlineStyle}>404 Page not found😶</div>}/>
  
       
      
    </Routes>
    
  );
}

export default App;

