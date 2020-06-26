export const setVisibilityTab = (tab) => ({
  type: "SET_VISIBILITY_TAB",
  tab,
});

export const gameTick = (timeStamp) => ({ type: "GAME_TICK", timeStamp });
