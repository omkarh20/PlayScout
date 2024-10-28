import { createContext, useState } from "react";
import { sport_list,player_list, COURT_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [menu,setMenu] = useState("home");
    const [selectedSport, setSelectedSport] = useState('Select Sport');

    const contextValue = {
        sport_list,
        player_list,
        menu,
        setMenu,
        selectedSport,
        setSelectedSport,
        COURT_list,
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider