import { createContext, useEffect, useState } from "react";
import { sport_list} from "../assets/assets";
import axios from "axios"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [menu,setMenu] = useState("home");
    const [selectedSport, setSelectedSport] = useState('Select Sport');
    const [selectedMeetSport, setSelectedMeetSport] = useState('Select Sport');
    const [selectedMeetLocation, setSelectedMeetLocation] = useState('Select Location');
    const [startDate, setStartDate] = useState(null);
    const url="http://localhost:4000";
    const [token,setToken] = useState("");
    const [COURT_list, setCourtList] = useState([]);
    const [player_list, setPlayerList] = useState([]);

    const fetchGameList = async () => {
        const response = await axios.get(url + "/api/game/game-list");
        setPlayerList(response.data.data);
    }

    const fetchVenueList = async () => {
        const response = await axios.get(url + "/api/venue/venue-list");
        setCourtList(response.data.data);
    }

    useEffect(()=>{
        async function loadData() {
            await fetchVenueList();
            await fetchGameList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
            }
        }
        loadData();
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