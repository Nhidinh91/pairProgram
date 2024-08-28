const BoxColor = (props) => {
  const toHexString = (num) => {
    const numStr = num.toString(16);
    return numStr;
  };

  const toHexStringProp = () => {
    const rHexString =
      toHexString(props.r).length === 1
        ? `0${toHexString(props.r)}`
        : toHexString(props.r);
    const gHexString =
      toHexString(props.g).length === 1
        ? `0${toHexString(props.g)}`
        : toHexString(props.g);
    const bHexString =
      toHexString(props.b).length === 1
        ? `0${toHexString(props.b)}`
        : toHexString(props.b);

    return `#${rHexString}${gHexString}${bHexString}`;
  };

  const boxStyle = {
    // background-color : rgb(props.r,props.g,props.b )
    background: `rgb(${props.r},${props.g},${props.b})`,
    color: `${props.r > 150 ? 'white' : 'black'}`,
    fontSize: '24px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    border: '1px solid black',
  };

  return (
    <div style={boxStyle}>
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
      <p>{toHexStringProp()}</p>
    </div>
  );
};

export default BoxColor;
