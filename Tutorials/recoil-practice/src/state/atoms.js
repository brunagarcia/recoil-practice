import { atom } from "recoil";

//simple atom
export const countState = atom({
  key: "countState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const textState = atom({
  key: "textState",
  default: "",
});
