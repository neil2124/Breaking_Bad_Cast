import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from "./components/ui/Header"
import CharacterGrid from "./components/characters/CharacterGrid"
import SearchForm from "./components/ui/SearchForm"

import './App.css';

function App() {
  const [items,setItems] = useState([]);
  const [isLoading,setisLoading] = useState(true);
  const [query,setQuery] = useState("");


  useEffect(() => {
   const  fetchItems = async()=>{
    const results = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    setItems(results.data);
    setisLoading(false);
   }
  fetchItems();
  },[query])
  return (
    <div className="container">
      <Header />
      <SearchForm getQuery={(q)=>{setQuery(q)}}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
