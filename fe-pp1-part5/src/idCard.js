import PropTypes from 'prop-types';
import './idCard.css';

const IdCard = ({firstName, lastName, gender, height, birth, picture})=>{
    return(
        <div className = "card">
            <div className = "photo">
                <img src = {picture} alt = {firstName}/>
            </div>
            <div className = "info">
                <p><span>First name:</span> {firstName}</p>
                <p><span>Last name:</span> {lastName}</p>
                <p><span>Gender:</span> {gender}</p>
                <p><span>Height:</span> {height}</p>
                <p><span>Birth:</span> {birth.toDateString()}</p>
            </div>
        </div>
    );
}

IdCard.propTypes = {
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(['male', 'female']).isRequired,
    height: PropTypes.number.isRequired,
    birth: PropTypes.instanceOf(Date).isRequired,
    picture: PropTypes.string.isRequired,
};

export default IdCard;