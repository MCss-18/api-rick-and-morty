import PropTypes from 'prop-types';
import CharacterDetails from './CharacterDetails'
function Character({ character }){
  

  return(
    <>
        <h3>{character.name}</h3>
        <img className="img-character img-fluid rounded-pill" src={character.image} alt={character.name} />
        <p>{ character.origin.name }</p>
        <CharacterDetails character={ character }></CharacterDetails>
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