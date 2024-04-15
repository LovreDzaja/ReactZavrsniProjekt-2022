import './App.scss';

import {useEffect, useState, useRef} from "react";
import Navbar from './Navbar';
import OpseznijeOKuharici from './context/OpseznijeOKuharici';
import About from './context/about';
import AlarmClock from "./context/AlarmClock";
import Footer from './footer';
function App() {
  const [ingredientList, updateIngredientList] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const API_KEY = "Your_Api_Key";
  const API_ID = "Your_Api_ID";
  const search = ()=>{
    searchForRecipe(inputRef.current.value);
    inputRef.current.value = "";
  }
  const searchForRecipe=(query)=>{
    setLoading(true);
    let url = `search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;
    fetch(url, {mode: "no-cors"}).then(response =>{
      return response.json();
    }).then(res =>{
      console.log(res.hits) 
      updateIngredientList(res.hits)
      setLoading(false);
    })
    .catch((err)=>{console.log("error", err)
    setLoading(false);});

  }
  useEffect(()=>{
      searchForRecipe();
  },[]);

  return (
    <div className="App">
     
     <Navbar></Navbar>
      <header className='App-header'>
        <div className='InputWrapper'>
          <input ref={inputRef} placeholder='Pronađite recept'></input>
          <button onClick={search}>Traži</button>
        </div>
        {loading &&<div class="center">
                  <div class="wave"></div>
                  <div class="wave"></div>
                  <div class="wave"></div>
                  <div class="wave"></div>
                  <div class="wave"></div>
                  <div class="wave"></div>
                  <div class="wave"></div>
                  <div class="wave"></div>
                  <div class="wave"></div>
                  <div class="wave"></div>
                </div>}
        <div className='Wrapper'>
            {ingredientList.map(({recipe})=>{
              const {label,image,ingredientLines} = recipe;
                  return(
                  <div key={label} className='ingredient'>
                    <span>{label}</span>
                    <img src={image}></img> 
                      <div className='Steps'>
                      {ingredientLines.map((step, index)=>{
                          return(<p key={index}>{step}</p>);
                      })} 
                      </div>
                    </div>
                    )
            })}
          </div>
      </header>

  <OpseznijeOKuharici/>
  <AlarmClock/> 
  <About></About>
  <Footer></Footer>
    </div>
  )

}

export default App;
