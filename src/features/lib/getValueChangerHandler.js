const getValueChangerHandler = (state, setStateFunction, statePropery) => [
  ({ target: { value } }) => {
    if (statePropery === "searchbar") {
      setStateFunction({ ...state, [statePropery]: value });
    } else {
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(value)) return;
      setStateFunction({ ...state, [statePropery]: value });
    }
  },
  () => {
    setStateFunction({ ...state, [statePropery]: "" });
  },
];

export default getValueChangerHandler;
