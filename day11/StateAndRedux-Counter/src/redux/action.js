import { INCREAMENT, DECREAMENT } from "./action.type";

export const increament = (e) => ({
  type: INCREAMENT,
  payload: e,
});

export const decreament = (e) => ({
  type: DECREAMENT,
  payload: e,
});
