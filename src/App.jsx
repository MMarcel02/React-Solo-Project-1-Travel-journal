import { useState } from 'react'
import './App.css'
import ListItem from "./components/listItem"
import Nav from "./components/nav"
import Data from "./data"

function App() {
  const post = Data.map(function (item){
    return (
      <ListItem
        key={item.key}
        item={item}
    />)
  })
  return (
    <>
      <Nav />
      <div className='list'>
        {post}
      </div>
    </>
  )   
}

export default App
