import { atom, selector } from "recoil";

// 페이지 언어 설정
export const languageState = atom({
  key: "languageState", // unique ID (with respect to other atoms/selectors)
  default: "en", // default value (aka initial value)
});

export const languageData = selector({
  key: "languageData",
  set: ({ set }, newValue) => set(languageState, newValue),
});
