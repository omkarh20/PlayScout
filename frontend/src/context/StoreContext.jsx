import { createContext, useEffect, useState } from "react";
import { sport_list,player_list, COURT_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [menu,setMenu] = useState("home");
    const [selectedSport, setSelectedSport] = useState('Select Sport');
    const [selectedMeetSport, setSelectedMeetSport] = useState('Select Sport');
    const [selectedMeetLocation, setSelectedMeetLocation] = useState('Select Location');
    const [startDate, setStartDate] = useState(null);
    const url="http://localhost:4000";
    const [token,setToken] = useState("");

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }
    },[])

    const contextValue = {
        sport_list,
        player_list,
        menu,
        setMenu,
        selectedSport,
        setSelectedSport,
        COURT_list,
        selectedMeetLocation,
        setSelectedMeetLocation,
        selectedMeetSport,
        setSelectedMeetSport,
        startDate,
        setStartDate,
        url,
        token,
        setToken
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider