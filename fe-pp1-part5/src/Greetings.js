import PropTypes from 'prop-types';
import './Greetings.css';
const Greetings = ({ lang, children, name }) => {
  let getGreet = (lang) => {
    switch (lang) {
      case 'en':
        return 'Hello';
      case 'fi':
        return 'Moi';
      case 'fr':
        return 'Bonjour';
      case 'de':
        return 'Hallo';
      case 'es':
        return 'Hola';
      default:
        return 'Hello';
    }
  };
  return (
    <div className="Greetings">
      {getGreet(lang)} {children ? children : name}
    </div>
  );
};

// Greetings.propTypes = {
//     lang: PropTypes.oneOf(['en', 'de', 'fi', 'fr', 'es']),
//     children: PropTypes.node
// }

export default Greetings;
