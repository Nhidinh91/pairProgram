const BoxColor = (props) => {
  const toHexString = (num) => {
    const numStr = num.toString(16);
    return numStr;
  };

  const toHexStringProp = () => {
    const rHexString = toHexString(props.r);
    const gHexString =
      toHexString(props.g) === '0' ? '00' : toHexString(props.g);
    const bHexString =
      toHexString(props.b) === '0' ? '00' : toHexString(props.b);
    console.log(rHexString);
    console.log(gHexString);
    console.log(bHexString);
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
