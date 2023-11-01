import { atom } from "recoil";

export const PaperState = atom({
  key: "paperState",
  default: {
    DOI: "",
    URL: "",
    title: "",
    author: [
      {
        given: "",
        family: "",
      },
    ],
    publisher: "",
  },
});

export const usernameState = atom({
  key: "usernameState",
  default: "",
});
