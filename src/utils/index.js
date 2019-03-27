// hydrates the initial state based on the constants set
export const getIntitialState = actions => {
  const intialState = {};
  for (let i = 0; i < actions.length; i++) {
    intialState[actions[i].property] = actions[i].selected;
  }
  return intialState;
};

// converts the cssProps object into a printable css string.
export const stringifyCSS = cssProps => {
  let copiedCSS = '';
  Object.keys(cssProps).forEach(cssProp => {
    copiedCSS += `${cssProp}: ${cssProps[cssProp]};\n`;
  });
  return copiedCSS;
};
