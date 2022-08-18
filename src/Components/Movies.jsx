import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export const Movies = () => {
  const [movies, setMovies] = useState([ {id:1,title:"ダミー",runtime:142},
  {id:2,title:"ダミー",runtime:142}])

  // useEffect(() => {
  //   setMovies({
  //     movies:[
  //       {id:1,title:"ダミー",runtime:142},
  //       {id:2,title:"ダミー",runtime:142}
  //     ]
  //   })
    
    
  // }, [])
  
  return(
    <>
    <h2>Choose a movie</h2>
    <ul>
      {movies.map((m) => (
        <li key={m.id}>
          <Link to={`/movies/${m.id}`} >
            {m.title}
          </Link>

        </li>
      ))}
    </ul>
    </>
  )
}