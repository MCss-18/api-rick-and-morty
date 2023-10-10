import PropTypes from 'prop-types';
import CharacterDetails from './CharacterDetails'
import { useState } from 'react';
function Character({ character }){

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const showInfo = () => {
    setSelectedCharacter(character);
  };

  const closeInfo = () => {
    setSelectedCharacter(null);
  };

  return(
    <>
        <h3>{character.name}</h3>
        <img className="img-character" src={character.image} alt={character.name} />
        <p>{ character.origin.name }</p>
        <button onClick={ showInfo }>
          More info
        </button>
        {selectedCharacter && (
          <CharacterDetails character={selectedCharacter} closeInfo={closeInfo} />
        )}
    </>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Character;