import MasterCard from './images/master.png';
import Visa from './images/visa.png';
import './CreditCard.css';

const createNew8String = (string) => {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 4 === 0) {
      newString += ' ';
      newString += string[i];
    } else {
      newString += string[i];
    }
  }
  return newString;
};

const CreditCard = (props) => {
  const getImgStr = (type) => {
    console.log('type', type);
    switch (type) {
      case 'Master Card':
        return MasterCard;
      case 'Visa':
        return Visa;

      default:
        return '';
    }
  };

  const last4Num = props.number.slice(-4);
  const first8Num = props.number.slice(0, props.number.length - 4);
  const new8Num = first8Num
    .split('') // convert string to array
    .map((el) => '*') //convert element to *
    .join(''); //convert array to string

  const final8Num = createNew8String(new8Num);

  const cardStyle = {
    background: `${props.bgColor}`,
    color: `${props.color}`,
  };

  return (
    <div className="card-item" style={cardStyle}>
      <div className="image-line">
        <div className="blank-space"></div>
        <img src={getImgStr(props.type)} alt={props.type} />
      </div>
      <div className="number-line">
        <p>
          <strong>
            {final8Num} {last4Num}
          </strong>
        </p>
      </div>
      <div className="date-bank-owner-line">
        <div className="date-bank-line">
          <div className="date-part">
            Expires{' '}
            {props.expirationMonth < 10
              ? `0${props.expirationMonth}`
              : props.expirationMonth}
            /{props.expirationYear.toString().slice(-2)}
          </div>
          <div className="bank-part"></div>
          {props.bank}
        </div>
        <div className="owner-line">{props.owner}</div>
      </div>
    </div>
  );
};

export default CreditCard;
