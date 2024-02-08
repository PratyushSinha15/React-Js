import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});   

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
});

// Todo creation application with filtering logic
// todos, filter

//2 input fields (title, description)=> store in an atom
// add button
// filter button (eg. gym, work, home)=> store in an atom
// list of todos
//selector which gives the current list of todos based on the filter