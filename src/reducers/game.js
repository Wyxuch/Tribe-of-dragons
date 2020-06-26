const initialState = {
  fps: 0,
  timeStamp: 0,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case "GAME_TICK":
      console.log((action.timeStamp - state.timeStamp) / 1000);
      const secondsPassed = (action.timeStamp - state.timeStamp) / 1000;
      return {
        timeStamp: action.timeStamp,
        fps: Math.round(1 / secondsPassed),
      };
    default:
      return state;
  }
};

export default game;
