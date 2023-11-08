import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header';
import JuicePage from './Componets/JuicePage'
import StorePage from './Componets/StorePage'
import Home  from './Componets/Home'
import SearchBar from './Componets/SearchBar'
import NavBar from './Componets/NavBar';
import {useState, useEffect} from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from './Componets/ErrorPage';
function App() {

  const [stores, setStores] = useState([])
  const [juices, setJuices] = useState([])

  const [searchText, setSearchText] = useState('')

useEffect(()=>{
  fetch('http://localhost:3000/store')
  .then(response => response.json())
  .then(storeData => {
    setStores(storeData)
  })
}, [])

useEffect(()=>{
  fetch('http://localhost:3000/juices')
  .then(response => response.json())
  .then(juiceData =>{
    setJuices(juiceData)
  })
}, [])

function updateSearchText (event){
  setSearchText(event.target.value)
}

const storeFilter = stores.filter((store)=>{
  return store.name.toLowerCase().includes(searchText.toLowerCase())
})

const juiceFilter = juices.filter((juice)=>{
  return juice.name.toLowerCase().includes(searchText.toLowerCase())
})

const routes = [
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/juicepage",
    element: <>
    <SearchBar updateSearchText={updateSearchText} />
    <JuicePage juices={juiceFilter}/>
    </>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/storepage",
    element:<> 
    <SearchBar updateSearchText={updateSearchText} />
    <StorePage store={storeFilter}/>
    </>,
    errorElement: <ErrorPage/>
  }
]

const router = createBrowserRouter(routes)

return (
    <>
    <Header />
    
    <RouterProvider router={router} />
    </>
  );
}

export default App;
