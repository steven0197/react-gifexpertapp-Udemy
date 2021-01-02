import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {  
  
  const {data: imagenes, loading} = useFetchGifs(category);

  
  return (
    <>
    <h3>{category}</h3>

    {loading && <p>Loading</p>}

    
    <div className="card-grid">
      
      
        {
          imagenes.map((image) => {
            return <GifGridItem
            key = {image.id}
            {...image}/> //esto manda cada propiedad como independiente

          })
        }
     
     
    </div>

    </>
  )
}
