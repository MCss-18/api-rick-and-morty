import PropTypes from 'prop-types';

function CharacterDetails({ character }){
  return(
    <div className="character-details">
        <div className='btn-close'>
          X
        </div>
        <div className='container-details'>
          <div className='container-img'>
            <img className="img-character img-fluid rounded-pill" src={character.image} alt={character.name} />
          </div>
          <div className='container-info'>
            <h3>{character.name}</h3>
            <p>{ character.origin.name }</p>
          </div>
        </div>
        
    </div>
  );
}

CharacterDetails.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CharacterDetails;