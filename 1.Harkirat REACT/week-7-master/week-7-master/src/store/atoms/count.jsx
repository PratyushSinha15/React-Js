import { atom } from "recoil";
//using recoil to manage state of count
export const countAtom = atom({
    key: "countAtom",
    default: 0
});
