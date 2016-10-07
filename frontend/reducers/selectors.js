export const allTypes = state => {
  return state ? Object.keys(state.types).map(key => state.types[key]) : [];
};
