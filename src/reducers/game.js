import { OffspringButtons } from "../constants";

const initialState = {
  fps: 0,
  timeStamp: 0,
  nextMaleOffspringCounter: 0,
  nextFemaleOffspringCounter: 0,
  hatchingTime: 25,
  king: {
    name: "Ad'Am",
    attack: 1,
    protection: 1,
    agility: 1,
    magic: 1,
    score: 1,
    gender: "male",
  },
  queen: {
    name: "E've",
    attack: 1,
    protection: 1,
    agility: 1,
    magic: 1,
    score: 1,
    gender: "female",
  },
  maleOffspring: [],
  femaleOffspring: [],
  maxOffspring: 2,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case "GAME_TICK":
      return process(state, action);
    case "OFFSPRING_ACTION":
      return offspringAction(state, action);
    default:
      return state;
  }
};

export default game;

// MAIN FUNCTION
const process = (state, action) => {
  const nextState = { ...state };

  const timePassed = (action.timeStamp - state.timeStamp) / 1000;

  // FPS COUNTER
  nextState.fps = Math.round(1 / timePassed);

  // TIME STAMP
  nextState.timeStamp = action.timeStamp;

  // OFFSPRING
  nextState.nextMaleOffspringCounter =
    state.nextMaleOffspringCounter + timePassed;

  nextState.nextFemaleOffspringCounter =
    state.nextFemaleOffspringCounter + timePassed;

  if (nextState.nextMaleOffspringCounter >= state.hatchingTime) {
    const offspringArrLength = state.maleOffspring
      ? state.maleOffspring.length
      : 0;

    if (!(offspringArrLength >= state.maxOffspring)) {
      const offspring = newOffspring(
        offspringArrLength,
        true,
        state.king,
        state.queen
      );
      nextState.maleOffspring = [...state.maleOffspring, offspring];

      nextState.nextMaleOffspringCounter = 0;
    } else {
      nextState.nextMaleOffspringCounter = state.hatchingTime;
    }
  }

  if (nextState.nextFemaleOffspringCounter >= state.hatchingTime) {
    const offspringArrLength = state.femaleOffspring
      ? state.femaleOffspring.length
      : 0;

    if (!(offspringArrLength >= state.maxOffspring)) {
      const offspring = newOffspring(
        offspringArrLength,
        false,
        state.king,
        state.queen
      );
      nextState.femaleOffspring = [...state.femaleOffspring, offspring];

      nextState.nextFemaleOffspringCounter = 0;
    } else {
      nextState.nextFemaleOffspringCounter = state.hatchingTime;
    }
  }

  return nextState;
};

// OFFSPRING MENU ACTIONS
const offspringAction = (state, action) => {
  const nextState = { ...state };

  const isMale = action.gender === "male" ? true : false;
  const arrayName = isMale ? "maleOffspring" : "femaleOffspring";
  const kingOrQueen = isMale ? "king" : "queen";
  const index = action.index;
  switch (action.button) {
    case OffspringButtons.OFFSPRING_KILL:
      nextState[arrayName] = state[arrayName].filter((el, i) => i !== index);
      break;
    case OffspringButtons.OFFSPRING_HUNT:
      console.log("not implemented");
      break;
    case OffspringButtons.OFFSPRING_WAR:
      console.log("not implemented");
      break;
    case OffspringButtons.OFFSPRING_PROMOTE:
      nextState[arrayName] = state[arrayName].filter((el, i) => {
        if (i !== index) {
          return el;
        } else {
          nextState[kingOrQueen] = el;
          return null;
        }
      });
      break;
    default:
      return state;
  }

  return nextState;
};

// UTILS
const newOffspring = (arrLength = 0, gender, king, queen) => {
  const attack = getStat((king.attack + queen.attack) / 2);
  const protection = getStat((king.protection + queen.protection) / 2);
  const agility = getStat((king.agility + queen.agility) / 2);
  const magic = getStat((king.magic + queen.magic) / 2);
  const score = (attack + protection + agility + magic) / 4;

  return {
    name: arrLength,
    attack: attack,
    protection: protection,
    agility: agility,
    magic: magic,
    score: score,
    gender: gender ? "male" : "female",
  };
};

const getCoefficient = () => {
  if (Math.random() >= 0.5) {
    return true;
  } else {
    return false;
  }
};

const getStat = (stat) => {
  const min = 0;
  const max = 2;
  const randomNumber = Math.random() * (max - min) + min;

  if (getCoefficient()) {
    const nextStat = stat + randomNumber;
    return nextStat;
  } else {
    const nextStat = stat - randomNumber;
    if (nextStat < 1) {
      return 1;
    } else {
      return nextStat;
    }
  }
};
