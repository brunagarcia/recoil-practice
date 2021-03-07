import { selector } from "recoil";
import { textState } from "./atoms";

export const textCountState = selector({
  key: "textCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
