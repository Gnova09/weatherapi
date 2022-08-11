import { createContext } from "react"


 const DataContext = createContext(
    [
        {
            day: null,
            img: null,
            firtsTemp: null,
            secondTemp: null
        },
        {
            day: null,
            img: null,
            firtsTemp: null,
            secondTemp: null
        },
        {
            day: null,
            img: null,
            firtsTemp: null,
            secondTemp: null
        },
        {
            day: null,
            img:null,
            firtsTemp: null,
            secondTemp: null
        }
    ]
);
export default DataContext;
