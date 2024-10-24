import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import logo from './logo.png'
import basketball from './basketball.jpg'
import cricket from './cricket.jpg'
import football from './football.jpg'
import badminton from './badminton.png'
import volleyball from './volleyball.jpg'
import squash from './squash.jpg'
import tabletennis from './tabletennis.jpg'
import swimming from './swimming.jpg'
import tennis from './tennis.jpg'
import bcourt1 from './bcourt1.png'
import bcourt2 from './bcourt2.png'
import bcourt3 from './bcourt3.png'
import bcourt4 from './bcourt4.png'
import bcourt5 from './bcourt5.png'
import ccourt1 from './ccourt1.png'
import ccourt2 from './ccourt2.png'
import ccourt3 from './ccourt3.png'
import vcourt1 from './vcourt1.png'
import vcourt2 from './vcourt2.png'
import vcourt3 from './vcourt3.png'
import tcourt1 from './tcourt1.png'
import tcourt2 from './tcourt2.png'
import tcourt3 from './tcourt3.png'

import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import linkedin_icon from './linkedin_icon.png'
import cross_icon from './cross_icon.png'
import email_icon from './email_icon.png'
import password_icon from './password_icon.png'
import location_icon from './location_icon.png'
import calendar_icon from './calendar_icon.png'
import trophy_icon from './trophy_icon.png'
import filter_icon from './filter_icon.png'
import pencil_icon from './pencil_icon.png'
import leftIcon from './shuttle_left.png'
import rightIcon from './shuttle_right.png'
import basketball_icon from './basketball_icon.png'
import badminton_icon from './badminton_icon.png'
import cricket_icon from './cricket_icon.png'
import football_icon from './football_icon.png'
import volleyball_icon from './volleyball_icon.png'
import squash_icon from './squash_icon.png'
import hockey_icon from './hockey_icon.png'
import swimming_icon from './swimming_icon.png'
import chess_icon from './chess_icon.png'
import tennis_icon from './tennis_icon.png'
import tabletennis_icon from './tabletennis_icon.png'
import yoga_icon from './yoga_icon.png'
import f_avatar1 from './f_avatar1.png'
import f_avatar2 from './f_avatar2.png'
import f_avatar3 from './f_avatar3.png'
import f_avatar4 from './f_avatar4.png'
import f_avatar5 from './f_avatar5.png'
import m_avatar1 from './m_avatar1.png'
import m_avatar2 from './m_avatar2.png'
import m_avatar3 from './m_avatar3.png'
import m_avatar4 from './m_avatar4.png'
import m_avatar5 from './m_avatar5.png'
import scourt1 from './scourt1.png';
import scourt2 from './scourt2.png';
import scourt3 from './scourt3.png';
import scourt4 from './scourt4.png';


import gcourt1 from './gcourt1.png';
import gcourt2 from './gcourt2.png';



export const assets = {
    search_icon,
    profile_icon,
    logo,
    facebook_icon,
    twitter_icon,
    linkedin_icon,
    cross_icon,
    email_icon,
    password_icon,
    location_icon,
    calendar_icon,
    trophy_icon,
    filter_icon,
    pencil_icon,
    leftIcon,
    rightIcon,
    basketball_icon,
    badminton_icon,
    cricket_icon,
    football_icon,
    volleyball_icon,
    hockey_icon,
    swimming_icon,
    squash_icon,
    chess_icon,
    tennis_icon,
    tabletennis_icon,
    yoga_icon,
    f_avatar1,
    f_avatar2,
    f_avatar3,
    f_avatar4,
    f_avatar5,
    m_avatar1,
    m_avatar2,
    m_avatar3,
    m_avatar4,
    m_avatar5
}

export const scroll = (className, scrollAmount) => {
    document.querySelector(`.${className}`).scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
};

export const sport_list = [
    {
        sport_name: "Badminton",
        sport_image: badminton
    },
    {
        sport_name: "Cricket",
        sport_image: cricket
    },
    {
        sport_name: "Volleyball",
        sport_image: volleyball
    },
    {
        sport_name: "Basketball",
        sport_image: basketball
    },
    {
        sport_name: "Football",
        sport_image: football
    },
    {
        sport_name: "Squash",
        sport_image: squash
    },
    {
        sport_name: "Table Tennis",
        sport_image: tabletennis
    },
    {
        sport_name: "Swimming",
        sport_image: swimming
    },
    {
        sport_name: "Tennis",
        sport_image: tennis
    }
]

export const player_list = [
    {
        _id: "1",
        date: "16th Oct,2024  9:00-10:30",
        sportIcon: basketball_icon,
        sportName: "Basketball",
        userImage: m_avatar1,
        userName: "Prajwal R G",
        membersJoined: 1,
        totalMembers: 10,
        level: "Casual",
        location: "Roar Basketball Academy, BTM 4th Stage, Bengaluru"
    },
    {
        _id: "2",
        date: "16th Oct,2024  11:00-12:00",
        sportIcon: badminton_icon,
        sportName: "Badminton",
        userImage: m_avatar3,
        userName: "Nipun Rao",
        membersJoined: 2,
        totalMembers: 4,
        level: "Professional",
        location: "Prajwal Sports Enterprise, Banashankari,Bengaluru"
    },
    {
        _id: "3",
        date: "16th Oct,2024  11:00-12:00",
        sportIcon: football_icon,
        sportName: "Football",
        userImage: m_avatar2,
        userName: "Mallikarjun",
        membersJoined: 2,
        totalMembers: 11,
        level: "Intermediate",
        location: "Play Arena, HSR Layout, Bengaluru"
    },
    {
        _id: "4",
        date: "16th Oct,2024  11:00-13:00",
        sportIcon: cricket_icon,
        sportName: "Cricket",
        userImage: m_avatar5,
        userName: "Nishant Hegde",
        membersJoined: 7,
        totalMembers: 11,
        level: "Professional",
        location: "RTM Indoor Cricket, Hebbal,Bengaluru"
    },
    {
        _id: "5",
        date: "16th Oct,2024  13:00-14:00",
        sportIcon: swimming_icon,
        sportName: "Swimming",
        userImage: m_avatar4,
        userName: "Navjyoth",
        membersJoined: 3,
        totalMembers: 4,
        level: "Intermediate",
        location: "SVM Swimming, RR Nagar,Bengaluru"
    },
    {
        _id: "6",
        date: "16th Oct,2024  13:00-14:30",
        sportIcon: tennis_icon,
        sportName: "Tennis",
        userImage: f_avatar3,
        userName: "Shreya M",
        membersJoined: 3,
        totalMembers: 4,
        level: "Casual",
        location: "Play Feathers, Bannerghatta,Bengaluru"
    },
    {
        _id: "7",
        date: "16th Oct,2024  14:00-16:00",
        sportIcon: football_icon,
        sportName: "Football",
        userImage: m_avatar1,
        userName: "Vishal J",
        membersJoined: 8,
        totalMembers: 11,
        level: "Professional",
        location: "Tiento Sports, Mission Road,Bengaluru"
    },
    {
        _id: "8",
        date: "16th Oct,2024  14:30-16:00",
        sportIcon: badminton_icon,
        sportName: "Badminton",
        userImage: f_avatar4,
        userName: "Deepika K",
        membersJoined: 2,
        totalMembers: 4,
        level: "Intermediate",
        location: "Wilson Garden Club,Bengaluru"
    },
    {
        _id: "9",
        date: "16th Oct,2024  15:00-16:00",
        sportIcon: volleyball_icon,
        sportName: "Volleyball",
        userImage: f_avatar1,
        userName: "Prakruti P",
        membersJoined: 4,
        totalMembers: 10,
        level: "Casual",
        location: "Seven Switch Sports, ,Bengaluru"
    },
    {
        _id: "10",
        date: "16th Oct,2024  15:00-16:00",
        sportIcon: chess_icon,
        sportName: "Chess",
        userImage: m_avatar4,
        userName: "Aditya K",
        membersJoined: 1,
        totalMembers: 2,
        level: "Intermediate",
        location: "BTM Chess Club, BTM 2,Bengaluru"
    },
    {
        _id: "11",
        date: "16th Oct,2024  16:00-17:00",
        sportIcon: swimming_icon,
        sportName: "Swimming",
        userImage: m_avatar3,
        userName: "Nikhil R",
        membersJoined: 2,
        totalMembers: 4,
        level: "Professional",
        location: "Blue Bird Aquatic Centre, Kumarswamy Layout,Bengaluru"
    },
    {
        _id: "12",
        date: "16th Oct,2024  18:00-19:00",
        sportIcon: squash_icon,
        sportName: "Squash",
        userImage: m_avatar2,
        userName: "Prakyath P",
        membersJoined: 3,
        totalMembers: 4,
        level: "Casual",
        location: "The BigBox, Rarajeshwari Nagar,Bengaluru"
    },
    {
        _id: "13",
        date: "17th Oct,2024  6:00-8:00",
        sportIcon:  cricket_icon,
        sportName: "Cricket",
        userImage: m_avatar5,
        userName: "Prakash S",
        membersJoined: 12,
        totalMembers: 20,
        level: "Intermediate",
        location: "Night Warchmen Cricket Ground, Dommasandra, Bengaluru"
    },
    {
        _id: "14",
        date: "17th Oct,2024  7:00-8:00",
        sportIcon: hockey_icon,
        sportName: "Hockey",
        userImage: m_avatar3,
        userName: "Pavan K",
        membersJoined: 5,
        totalMembers: 10,
        level: "Professional",
        location: "Gabriel Sports Club, Hennur Cross,Bengaluru"
    },
    {
        _id: "15",
        date: "17th Oct,2024  8:00-10:00",
        sportIcon: basketball_icon,
        sportName: "Basketball",
        userImage: f_avatar2,
        userName: "Risha",
        membersJoined: 5,
        totalMembers: 15,
        level: "Casual",
        location: "Play Arena, Sarjapur Road,Bengaluru"
    },
    {
        _id: "16",
        date: "17th Oct,2024  8:00-10:00",
        sportIcon: chess_icon,
        sportName: "Chess",
        userImage: m_avatar1,
        userName: "Samarth G",
        membersJoined: 1,
        totalMembers: 2,
        level: "Intermediate",
        location: "Grovies Sports Bistro, Niranthara Layout,Bengaluru"
    },
    {
        _id: "17",
        date: "17th Oct,2024  10:00-12:00",
        sportIcon: hockey_icon,
        sportName: "Hockey",
        userImage: m_avatar2,
        userName: "Namith U",
        membersJoined: 8,
        totalMembers: 15,
        level: "Professional",
        location: "Bull Ring Arena, Indiranagar,Bengaluru"
    },
    {
        _id: "18",
        date: "17th Oct,2024  12:00-13:30",
        sportIcon: tennis_icon,
        sportName: "Tennis",
        userImage: f_avatar5,
        userName: "Manasi P",
        membersJoined: 1,
        totalMembers: 4,
        level: "Casual",
        location: "Game Theory, Indiranagar,Bengaluru"
    },
    {
        _id: "19",
        date: "17th Oct,2024  12:00-14:00",
        sportIcon: volleyball_icon,
        sportName: "Volleyball",
        userImage: m_avatar4,
        userName: "Manu P",
        membersJoined: 4,
        totalMembers: 10,
        level: "Casual",
        location: "Ekam Sports, Marathahalli,Bengaluru"
    },
    {
        _id: "20",
        date: "17th Oct,2024  13:00-14:00",
        sportIcon: squash_icon,
        sportName: "Squash",
        userImage: f_avatar5,
        userName: "Anagha R",
        membersJoined: 3,
        totalMembers: 4,
        level: "Professional",
        location: "Fitness Cafe, Koramangala,Bengaluru"
    },
    {
        _id: "21",
        date: "17th Oct,2024  14:00-15:30",
        sportIcon: cricket_icon,
        sportName: "Cricket",
        userImage: m_avatar5,
        userName: "Shrivardhan S",
        membersJoined: 9,
        totalMembers: 22,
        level: "Casual",
        location: "TSG Sports Arena, Uttarahalli,Bengaluru"
    },
    {
        _id: "22",
        date: "17th Oct,2024  14:00-15:30",
        sportIcon: swimming_icon,
        sportName: "Swimming",
        userImage: m_avatar1,
        userName: "Chandan A",
        membersJoined: 3,
        totalMembers: 5,
        level: "Intermediate",
        location: "Endless Pool Fitness Centre, Mathikere,Bengaluru"
    },
    {
        _id: "23",
        date: "17th Oct,2024  16:00-18:00",
        sportIcon: volleyball_icon,
        sportName: "Volleyball",
        userImage: m_avatar3,
        userName: "Aprameya",
        membersJoined: 3,
        totalMembers: 10,
        level: "Intermediate",
        location: "Loop Sportsplex, Mahadevpura,Bengaluru"
    },
    {
        _id: "24",
        date: "17th Oct,2024  17:00-18:00",
        sportIcon: squash_icon,
        sportName: "Squash",
        userImage: m_avatar2,
        userName: "Manoj N",
        membersJoined: 2,
        totalMembers: 4,
        level: "Intermediate",
        location: "Spartan Arena, Rajajinagar, Bengaluru"
    },
    {
        _id: "25",
        date: "17th Oct,2024  17:00-19:00",
        sportIcon: football_icon,
        sportName: "Football",
        userImage: f_avatar5,
        userName: "Shruthi T",
        membersJoined: 9,
        totalMembers: 11,
        level: "Casual",
        location: "Kixx Turf, Jayanagar, Bengaluru"
    },
    {
        _id: "26",
        date: "17th Oct,2024  18:00-19:00",
        sportIcon: badminton_icon,
        sportName: "Badminton",
        userImage: f_avatar3,
        userName: "Ankita D",
        membersJoined: 2,
        totalMembers: 4,
        level: "Professional",
        location: "Feather Pro Court, Malleswaram, Bengaluru"
    },
    {
        _id: "27",
        date: "17th Oct,2024  18:00-19:30",
        sportIcon: volleyball_icon,
        sportName: "Volleyball",
        userImage: m_avatar4,
        userName: "Anirudh H",
        membersJoined: 5,
        totalMembers: 10,
        level: "Casual",
        location: "Breeze Sports Hub, Whitefield, Bengaluru"
    },
    {
        _id: "28",
        date: "18th Oct,2024  7:00-8:00",
        sportIcon: tennis_icon,
        sportName: "Tennis",
        userImage: m_avatar1,
        userName: "Sanath P",
        membersJoined: 2,
        totalMembers: 4,

        level: "Intermediate",
        location: "Court Slam, JP Nagar, Bengaluru"
    },
    {
        _id: "29",
        date: "18th Oct,2024  8:00-9:00",
        sportIcon: swimming_icon,
        sportName: "Swimming",
        userImage: f_avatar4,
        userName: "Shreya R",
        membersJoined: 3,
        totalMembers: 4,
        level: "Intermediate",
        location: "AquaFit Arena, JP Nagar, Bengaluru"
    },
    {
        _id: "30",
        date: "18th Oct,2024  9:00-10:00",
        sportIcon: badminton_icon,
        sportName: "Badminton",
        userImage: f_avatar3,
        userName: "Ananya V",
        membersJoined: 1,
        totalMembers: 4,
        level: "Casual",
        location: "Smash Zone, Koramangala, Bengaluru"
    },
    {
        _id: "31",
        date: "17th Oct,2024  9:00-10:00",
        sportIcon: tabletennis_icon,
        sportName: "Table Tennis",
        userImage: m_avatar2,
        userName: "Raghav P",
        membersJoined: 2,
        totalMembers: 4,
        level: "Professional",
        location: "Ping Pong Club, Jayanagar, Bengaluru"
    },
    {
        _id: "32",
        date: "18th Oct,2024  10:00-11:00",
        sportIcon: volleyball_icon,
        sportName: "Volleyball",
        userImage: f_avatar5,
        userName: "Meghana S",
        membersJoined: 6,
        totalMembers: 10,
        level: "Intermediate",
        location: "Volley Zone, Indiranagar, Bengaluru"
    },
    {
        _id: "33",
        date: "18th Oct,2024  11:00-12:00",
        sportIcon: swimming_icon,
        sportName: "Swimming",
        userImage: m_avatar1,
        userName: "Aryan B",
        membersJoined: 2,
        totalMembers: 4,
        level: "Casual",
        location: "Blue Wave Club, Banashankari, Bengaluru"
    },
    {
        _id: "34",
        date: "18th Oct,2024  12:00-14:00",
        sportIcon: cricket_icon,
        sportName: "Cricket",
        userImage: m_avatar4,
        userName: "Shreyas V",
        membersJoined: 9,
        totalMembers: 22,
        level: "Intermediate",
        location: "Max Turf, HSR Layout, Bengaluru"
    },
    {
        _id: "35",
        date: "18th Oct,2024  14:00-15:30",
        sportIcon: volleyball_icon,
        sportName: "Volleyball",
        userImage: m_avatar5,
        userName: "Harish A",
        membersJoined: 5,
        totalMembers: 10,
        level: "Professional",
        location: "Ace Sports Club, Frazer Town, Bengaluru"
    },
    {
        _id: "36",
        date: "16th Oct,2024  16:00-17:00",
        sportIcon: tabletennis_icon,
        sportName: "Table Tennis",
        userImage: f_avatar1,
        userName: "Priya G",
        membersJoined: 2,
        totalMembers: 4,
        level: "Casual",
        location: "Spin Arena, Whitefield, Bengaluru"
    },
    {
        _id: "37",
        date: "19th Oct,2024  8:00-10:00",
        sportIcon: basketball_icon,
        sportName: "Basketball",
        userImage: m_avatar4,
        userName: "Varun T",
        membersJoined: 6,
        totalMembers: 15,
        level: "Intermediate",
        location: "Hoop House, Electronic City, Bengaluru"
    },
    {
        _id: "38",
        date: "19th Oct,2024  9:00-10:30",
        sportIcon: badminton_icon,
        sportName: "Badminton",
        userImage: f_avatar1,
        userName: "Soumya K",
        membersJoined: 2,
        totalMembers: 4,
        level: "Professional",
        location: "Racquet Zone, Hennur, Bengaluru"
    },
    {
        _id: "39",
        date: "19th Oct,2024  10:00-11:00",
        sportIcon: squash_icon,
        sportName: "Squash",
        userImage: m_avatar5,
        userName: "Tarakeshwar K",
        membersJoined: 3,
        totalMembers: 4,
        level: "Casual",
        location: "ProFit Arena, Uttarahalli, Bengaluru"
    },
    {
        _id: "40",
        date: "19th Oct,2024  11:00-13:00",
        sportIcon: football_icon,
        sportName: "Football",
        userImage: f_avatar3,
        userName: "Nishmitha S",
        membersJoined: 10,
        totalMembers: 11,
        level: "Intermediate",
        location: "Sprint Field, RT Nagar, Bengaluru"
    }    
];export const COURT_list = [
    {
        _id: "court_cricket_3",
        courtName: "Pitch Perfect",
        sport: "Cricket",
        courtLocation: "Basavanagudi, Bengaluru",
        courtsAvailable: 4,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: ccourt3,
        game_icon: cricket_icon // Added game icon
    },
    {
        _id: "court_badminton_5",
        courtName: "Racquet Paradise",
        sport: "Badminton",
        courtLocation: "Indiranagar, Bengaluru",
        courtsAvailable: 2,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: bcourt5,
        game_icon: badminton_icon // Added game icon
    },
    {
        _id: "court_tabletennis_1",
        courtName: "Spin City",
        sport: "Table Tennis",
        courtLocation: "Whitefield, Bengaluru",
        courtsAvailable: 1,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: tcourt1,
        game_icon: tabletennis_icon // Added game icon
    },
    {
        _id: "court_volleyball_1",
        courtName: "Spike Zone",
        sport: "Volleyball",
        courtLocation: "Koramangala, Bengaluru",
        courtsAvailable: 2,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: vcourt1,
        game_icon: volleyball_icon // Added game icon
    },
    {
        _id: "court_badminton_1",
        courtName: "Sky Smash Arena",
        sport: "Badminton",
        courtLocation: "Koramangala, Bengaluru",
        courtsAvailable: 3,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: bcourt1,
        game_icon: badminton_icon // Added game icon
    },
    {
        _id: "court_tabletennis_2",
        courtName: "Table Tango",
        sport: "Table Tennis",
        courtLocation: "MG Road, Bengaluru",
        courtsAvailable: 5,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: tcourt2,
        game_icon: tabletennis_icon // Added game icon
    },
    {
        _id: "court_volleyball_2",
        courtName: "Net Warriors",
        sport: "Volleyball",
        courtLocation: "Indiranagar, Bengaluru",
        courtsAvailable: 3,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: vcourt2,
        game_icon: volleyball_icon // Added game icon
    },
    {
        _id: "court_badminton_3",
        courtName: "Victory Court",
        sport: "Badminton",
        courtLocation: "MG Road, Bengaluru",
        courtsAvailable: 5,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: bcourt3,
        game_icon: badminton_icon // Added game icon
    },
    {
        _id: "pool_swimming_1",
        courtName: "Aqua Bliss",
        sport: "Swimming",
        courtLocation: "Indiranagar, Bengaluru",
        courtsAvailable: 3,
        price: Math.floor(Math.random() * (500 - 300 + 1)) + 300,
        courtImage: scourt1,
        game_icon: swimming_icon // Added game icon
    },
    {
        _id: "court_volleyball_3",
        courtName: "Beach Vibes",
        sport: "Volleyball",
        courtLocation: "Jayanagar, Bengaluru",
        courtsAvailable: 4,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: vcourt3,
        game_icon: volleyball_icon // Added game icon
    },
    {
        _id: "court_badminton_4",
        courtName: "Net Masters",
        sport: "Badminton",
        courtLocation: "Whitefield, Bengaluru",
        courtsAvailable: 1,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: bcourt4,
        game_icon: badminton_icon // Added game icon
    },
    {
        _id: "court_cricket_1",
        courtName: "Cricket Central",
        sport: "Cricket",
        courtLocation: "HSR Layout, Bengaluru",
        courtsAvailable: 2,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: ccourt1,
        game_icon: cricket_icon // Added game icon
    },
    {
        _id: "court_badminton_2",
        courtName: "Feather Flight",
        sport: "Badminton",
        courtLocation: "Jayanagar, Bengaluru",
        courtsAvailable: 4,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: bcourt2,
        game_icon: badminton_icon // Added game icon
    },
    {
        _id: "pool_swimming_2",
        courtName: "Blue Lagoon",
        sport: "Swimming",
        courtLocation: "Koramangala, Bengaluru",
        courtsAvailable: 5,
        price: Math.floor(Math.random() * (450 - 350 + 1)) + 350,
        courtImage: scourt2,
        game_icon: swimming_icon // Added game icon
    },
    {
        _id: "court_cricket_2",
        courtName: "Boundary Line",
        sport: "Cricket",
        courtLocation: "Kalyan Nagar, Bengaluru",
        courtsAvailable: 3,
        price: Math.floor(Math.random() * (300 - 200 + 1)) + 200,
        courtImage: ccourt2,
        game_icon: cricket_icon // Added game icon
    },
    {
        _id: "pool_swimming_4",
        courtName: "Crystal Clear",
        sport: "Swimming",
        courtLocation: "Malleswaram, Bengaluru",
        courtsAvailable: 4,
        price: Math.floor(Math.random() * (500 - 350 + 1)) + 350,
        courtImage: scourt4,
        game_icon: swimming_icon // Added game icon
    },
    {
        _id: "pool_swimming_3",
        courtName: "Splash Wave",
        sport: "Swimming",
        courtLocation: "Whitefield, Bengaluru",
        courtsAvailable: 2,
        price: Math.floor(Math.random() * (400 - 250 + 1)) + 250,
        courtImage: scourt3,
        game_icon: swimming_icon // Added game icon
    }
];
