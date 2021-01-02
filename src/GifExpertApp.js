import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

 // const categories = ['One Punch' , 'Samurai X', 'Dragon Ball'];
 const [categories, setCategories] = useState([])

//  const handleAdd = () => {
//    const serie = 'HunterXHunter';
//    setCategories(categories => [...categories, serie]) // Call back del estado anterior

//  }

  return (
    <div>

      <h2>GifExpertApp</h2>
      {/* <button onClick= {handleRestart}>Restart</button> */}
      <AddCategory setCategories={setCategories}/>
      <hr/>   

     <ol>
       {
         categories.map((category, index) => {
          return < GifGrid 
          key = {category}
          category={category} /> //El key es mejor que no sea el index
         })
       }
     </ol>
      
    </div>
  )
}

