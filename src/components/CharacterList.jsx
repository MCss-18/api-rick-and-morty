import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage( { page, setPage } ){
  return(
    <div className="navigate">
      <p>Page: {page}</p>
      <div className="btn-pages">
        <button 
          className="btn-back"
          onClick={ () => setPage((page <= 0)? 1: page - 1)}
          disabled={ page <= 1 }
        >Page { page }</button>
        <button 
          className="btn-next"
          onClick={ () => setPage(page + 1) }
        >Page { page + 1 }</button>
      </div>
    </div>
  )
}

function CharacterList(){
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false);
      // Aqui llamamos al objeto "results" de la API
      setCharacters(data.results);
    }  
    fetchData();
  }, [page]);

  

  return(
    <div className="container">

      <NavPage page={page} setPage={setPage} />

      {
        loading ? (<div>Loading...</div>) :
        (
          <div className="container-list-character row">
            {
              characters.map((character) => {
                return(
                  <div className="card-character col-md-4" key={character.id}>
                    <Character  character={character} />
                  </div>
                );
              })  
            }
          </div>
        )
      }
      
    </div>
  );
}

export default CharacterList;