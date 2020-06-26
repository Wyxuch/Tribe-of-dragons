export const setVisibilityTab = (tab) => ({
  type: "SET_VISIBILITY_TAB",
  tab,
});

export const gameTick = (timeStamp) => ({ type: "GAME_TICK", timeStamp });

export const offspringAction = (button, index, gender) => ({
  type: "OFFSPRING_ACTION",
  button,
  index,
  gender,
});
