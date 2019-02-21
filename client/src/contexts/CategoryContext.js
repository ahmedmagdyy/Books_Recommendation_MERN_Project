import {createContext} from 'react';


export const CategoryContext = createContext({
    categories : [],
    addItemList: () => {},
    deleteItemList:()=>{}
});