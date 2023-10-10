import PropTypes from 'prop-types';

function CharacterDetails({ character, closeInfo }){

  return(
    <div className={`character-details ${character ? 'show' : ''}`}>
        <div className='btn-close btn-close-white' onClick={closeInfo}>
        
        </div>
        <div className='container-details'>
          <div className='container-img'>
            <img src={character.image} alt={character.name} />
          </div>
          <div className='container-info'>
            <h3>{character.name}</h3>
            <p>Origin: { character.origin.name }</p>
            <p>Status: { character.status }</p>
            <p>Species: { character.species }</p>
            <p>Gender: { character.gender }</p>
          </div>
        </div>
        
    </div>
  );
}

CharacterDetails.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  closeInfo: PropTypes.func.isRequired,
};

export default CharacterDetails;