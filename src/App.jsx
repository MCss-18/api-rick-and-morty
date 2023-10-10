import CharacterList from './components/CharacterList';

function App() {
  return (
    <div>
      <h1 className='title'>API Rick and Morty</h1>
      <CharacterList/>
      <footer>
        <div className='container-footer'>
          <p>Rick and Morty | 2023</p>
        </div>
      </footer>
    </div>
  )
}

export default App