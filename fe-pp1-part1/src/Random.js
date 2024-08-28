import PropTypes from 'prop-types';
import './Components.css';
const Random = ({min, max})=>{
    const getRandomInt = (min, max)=>{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return(
        <div>
            <p className = "random">Random value between {min} and {max} =&gt; {getRandomInt(min, max)}</p>
        </div>
    );
}

Random.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
};

export default Random;