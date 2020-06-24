const initialState = {
  counter: 0,
};

const game = (state, action) => {
  switch (action.type) {
    case "GAME_TICK":
      return {
        counter: state.counter + 1,
      };
    default:
      return initialState;
  }
};

export default game;
