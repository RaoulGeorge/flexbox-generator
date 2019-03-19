export const getIntitialState = actions => {
  const intialState = {};
  for (let i = 0; i < actions.length; i++) {
    intialState[actions[i].property] = actions[i].selected;
  }
  return intialState;
};
