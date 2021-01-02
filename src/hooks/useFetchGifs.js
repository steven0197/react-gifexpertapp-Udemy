import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {

    getGifs(category).then(imgs => {
      
        setState({
          data: imgs,
          loading:false
        });
     
    })    
  }, [category] ) //Este arreglo  indica que solo quiero que se haga el getGifs cuando el componente se renderice por primera vez

  

  return state; // {data: [] , loading: true}
}