import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import logout_icon from './logout_icon.png'
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
{/*import f_avatar1 from './f_avatar1.png'
import f_avatar2 from './f_avatar2.png'
import f_avatar3 from './f_avatar3.png'
import f_avatar4 from './f_avatar4.png'
import f_avatar5 from './f_avatar5.png'
import m_avatar1 from './m_avatar1.png'
import m_avatar2 from './m_avatar2.png'
import m_avatar3 from './m_avatar3.png'
import m_avatar4 from './m_avatar4.png'
import m_avatar5 from './m_avatar5.png' */}
import scourt1 from './scourt1.png';
import scourt2 from './scourt2.png';
import scourt3 from './scourt3.png';
import scourt4 from './scourt4.png';


import gcourt1 from './gcourt1.png';
import gcourt2 from './gcourt2.png';



export const assets = {
    search_icon,
    profile_icon,
    logout_icon,
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

{/*
export const player_list = [
    {
        _id: 1,
        date: "16th Oct,2024  9:00-10:30",
        filterDate: "10/16/2024",
        sportIcon: basketball_icon,
        sportName: "Basketball",
        userImage: m_avatar1,
        userName: "Prajwal R G",
        membersJoined: 1,
        totalMembers: 10,
        level: "Casual",
        courtName: "Roar Basketball Academy",
        location: "BTM 4th Stage, Bengaluru"
    },
    {
        _id: 2,
        date: "16th Oct,2024  11:00-12:00",
        filterDate: "10/16/2024",
        sportIcon: badminton_icon,
        sportName: "Badminton",
        userImage: m_avatar3,
        userName: "Nipun Rao",
        membersJoined: 2,
        totalMembers: 4,
        level: "Professional",
        courtName: "Prajwal Sports Enterprise",
        location: "Banashankari, Bengaluru"
    },
    {
        _id: 3,
        date: "16th Oct,2024  11:00-12:00",
        filterDate: "10/16/2024",
        sportIcon: football_icon,
        sportName: "Football",
        userImage: m_avatar2,
        userName: "Mallikarjun",
        membersJoined: 2,
        totalMembers: 11,
        level: "Intermediate",
        courtName: "Play Arena",
        location: "HSR Layout, Bengaluru"
    },
    {
        _id: 4,
        date: "16th Oct,2024  11:00-13:00",
        filterDate: "10/16/2024",
        sportIcon: cricket_icon,
        sportName: "Cricket",
        userImage: m_avatar5,
        userName: "Nishant Hegde",
        membersJoined: 7,
        totalMembers: 11,
        level: "Professional",
        courtName: "RTM Indoor Cricket",
        location: "Hebbal, Bengaluru"
    },
    {
        _id: 5,
        date: "16th Oct,2024  13:00-14:00",
        filterDate: "10/16/2024",
        sportIcon: swimming_icon,
        sportName: "Swimming",
        userImage: m_avatar4,
        userName: "Navjyoth",
        membersJoined: 3,
        totalMembers: 4,
        level: "Intermediate",
        courtName: "SVM Swimming",
        location: "RR Nagar, Bengaluru"
    },
    {
        _id: 6,
        date: "16th Oct,2024  13:00-14:30",
        filterDate: "10/16/2024",
        sportIcon: tennis_icon,
        sportName: "Tennis",
        userImage: f_avatar3,
        userName: "Shreya M",
        membersJoined: 3,
        totalMembers: 4,
        level: "Casual",
        courtName: "Play Feathers",
        location: "Bannerghatta, Bengaluru"
    },
    {
        _id: 7,
        date: "16th Oct,2024  14:00-16:00",
        filterDate: "10/16/2024",
        sportIcon: football_icon,
        sportName: "Football",
        userImage: m_avatar1,
        userName: "Vishal J",
        membersJoined: 8,
        totalMembers: 11,
        level: "Professional",
        courtName: "Tiento Sports",
        location: "Mission Road, Bengaluru"
    },
    {
        _id: 8,
        date: "16th Oct,2024  14:30-16:00",
        filterDate: "10/16/2024",
        sportIcon: badminton_icon,
        sportName: "Badminton",
        userImage: f_avatar4,
        userName: "Deepika K",
        membersJoined: 2,
        totalMembers: 4,
        level: "Intermediate",
        courtName: "Wilson Garden Club",
        location: "Bengaluru"
    },
    {
        _id: 9,
        date: "16th Oct,2024  15:00-16:00",
        filterDate: "10/16/2024",
        sportIcon: volleyball_icon,
        sportName: "Volleyball",
        userImage: f_avatar1,
        userName: "Prakruti P",
        membersJoined: 4,
        totalMembers: 10,
        level: "Casual",
        courtName: "Seven Switch Sports",
        location: "Bengaluru"
    },
    {
        _id: 10,
        date: "16th Oct,2024  15:00-16:00",
        filterDate: "10/16/2024",
        sportIcon: chess_icon,
        sportName: "Chess",
        userImage: m_avatar4,
        userName: "Aditya K",
        membersJoined: 1,
        totalMembers: 2,
        level: "Intermediate",
        courtName: "BTM Chess Club",
        location: "BTM 2, Bengaluru"
    },
    {
        _id: 11,
        date: "16th Oct,2024  16:00-17:00",
        filterDate: "10/16/2024",
        sportIcon: swimming_icon,
        sportName: "Swimming",
        userImage: m_avatar3,
        userName: "Nikhil R",
        membersJoined: 2,
        totalMembers: 4,
        level: "Professional",
        courtName: "Blue Bird Aquatic Centre",
        location: "Kumarswamy Layout, Bengaluru"
    },
    {
        _id: 12,
        date: "16th Oct,2024  18:00-19:00",
        filterDate: "10/16/2024",
        sportIcon: squash_icon,
        sportName: "Squash",
        userImage: m_avatar2,
        userName: "Prakyath P",
        membersJoined: 3,
        totalMembers: 4,
        level: "Casual",
        courtName: "The BigBox",
        location: "Rarajeshwari Nagar, Bengaluru"
    },
    {
        _id: 13,
        date: "17th Oct,2024  6:00-8:00",
        filterDate: "10/17/2024",
        sportIcon: cricket_icon,
        sportName: "Cricket",
        userImage: m_avatar5,
        userName: "Prakash S",
        membersJoined: 12,
        totalMembers: 20,
        level: "Intermediate",
        courtName: "Night Warchmen Cricket Ground",
        location: "Dommasandra, Bengaluru"
    },
    {
        _id: 14,
        date: "17th Oct,2024  7:00-8:00",
        filterDate: "10/17/2024",
        sportIcon: hockey_icon,
        sportName: "Hockey",
        userImage: m_avatar3,
        userName: "Pavan K",
        membersJoined: 5,
        totalMembers: 10,
        level: "Professional",
        courtName: "Gabriel Sports Club",
        location: "Hennur Cross, Bengaluru"
    },
    {
        _id: 15,
        date: "17th Oct,2024  8:00-10:00",
        filterDate: "10/17/2024",
        sportIcon: basketball_icon,
        sportName: "Basketball",
        userImage: f_avatar2,
        userName: "Risha",
        membersJoined: 5,
        totalMembers: 15,
        level: "Casual",
        courtName: "Play Arena",
        location: "Sarjapur Road, Bengaluru"
    },
    {
        _id: 16,
        date: "17th Oct,2024  8:00-10:00",
        filterDate: "10/17/2024",
        sportIcon: chess_icon,
        sportName: "Chess",
        userImage: m_avatar1,
        userName: "Samarth G",
        membersJoined: 1,
        totalMembers: 2,
        level: "Intermediate",
        courtName: "Grovies Sports Bistro",
        location: "Niranthara Layout, Bengaluru"
    },
    {
        _id: 17,
        date: "17th Oct,2024  10:00-12:00",
        filterDate: "10/17/2024",
        sportIcon: hockey_icon,
        sportName: "Hockey",
        userImage: m_avatar2,
        userName: "Namith U",
        membersJoined: 8,
        totalMembers: 15,
        level: "Professional",
        courtName: "Bull Ring Arena",
        location: "Indiranagar, Bengaluru"
    },
    {
        _id: "18",
        date: "17th Oct,2024  12:00-13:30",
        filterDate: "10/17/2024",
        sportIcon: tennis_icon,
        sportName: "Tennis",
        userImage: f_avatar5,
        userName: "Manasi P",
        membersJoined: 1,
        totalMembers: 4,
        level: "Casual",
        courtName: "Game Theory",
        location: "Indiranagar, Bengaluru"
    },
    {
        _id: "19",
        date: "17th Oct,2024  12:00-14:00",
        filterDate: "10/17/2024",
        sportIcon: volleyball_icon,
        sportName: "Volleyball",
        userImage: m_avatar4,
        userName: "Manu P",
        membersJoined: 4,
        totalMembers: 10,
        level: "Casual",
        courtName: "Ekam Sports",
        location: "Marathahalli, Bengaluru"
    },
    {
        _id: "20",
        date: "17th Oct,2024  13:00-14:00",
        filterDate: "10/17/2024",
        sportIcon: squash_icon,
        sportName: "Squash",
        userImage: f_avatar5,
        userName: "Anagha R",
        membersJoined: 3,
        totalMembers: 4,
        level: "Professional",
        courtName: "Fitness Cafe",
        location: "Koramangala, Bengaluru"
    },
    {
        _id: "21",
        date: "17th Oct,2024  14:00-15:30",
        filterDate: "10/17/2024",
        sportIcon: cricket_icon,
        sportName: "Cricket",
        userImage: m_avatar5,
        userName: "Shrivardhan S",
        membersJoined: 9,
        totalMembers: 22,
        level: "Casual",
        courtName: "TSG Sports Arena",
        location: "Uttarahalli, Bengaluru"
    },
    {
        _id: "22",
        date: "17th Oct,2024  14:00-15:30",
        filterDate: "10/17/2024",
        sportIcon: swimming_icon,
        sportName: "Swimming",
        userImage: m_avatar1,
        userName: "Chandan A",
        membersJoined: 3,
        totalMembers: 5,
        level: "Intermediate",
        courtName: "Endless Pool Fitness Centre",
        location: "Mathikere, Bengaluru"
    },
    {
        _id: "23",
        date: "17th Oct,2024  16:00-18:00",
        filterDate: "10/17/2024",
        sportIcon: volleyball_icon,
        sportName: "Volleyball",
        userImage: m_avatar3,
        userName: "Aprameya",
        membersJoined: 3,
        totalMembers: 10,
        level: "Intermediate",
        courtName: "Loop Sportsplex",
        location: "Mahadevpura, Bengaluru"
    },
    {
        _id: "24",
        date: "17th Oct,2024  17:00-18:00",
        filterDate: "10/17/2024",
        sportIcon: squash_icon,
        sportName: "Squash",
        userImage: m_avatar2,
        userName: "Manoj N",
        membersJoined: 2,
        totalMembers: 4,
        level: "Intermediate",
        courtName: "Spartan Arena",
        location: "Rajajinagar, Bengaluru"
    },
    {
        _id: "25",
        date: "17th Oct,2024  17:00-19:00",
        filterDate: "10/17/2024",
        sportIcon: football_icon,
        sportName: "Football",
        userImage: f_avatar5,
        userName: "Shruthi T",
        membersJoined: 9,
        totalMembers: 11,
        level: "Casual",
        courtName: "Kixx Turf",
        location: "Jayanagar, Bengaluru"
    },
    {
        _id: "26",
        date: "17th Oct,2024  18:00-19:00",
        filterDate: "10/17/2024",
        sportIcon: badminton_icon,
        sportName: "Badminton",
        userImage: f_avatar3,
        userName: "Ankita D",
        membersJoined: 2,
        totalMembers: 4,
        level: "Professional",
        courtName: "Feather Pro Court",
        location: "Malleswaram, Bengaluru"
    },
    {
        _id: "27",
        date: "17th Oct,2024  18:00-19:30",
        filterDate: "10/17/2024",
        sportIcon: volleyball_icon,
        sportName: "Volleyball",
        userImage: m_avatar4,
        userName: "Anirudh H",
        membersJoined: 5,
        totalMembers: 10,
        level: "Casual",
        courtName: "Breeze Sports Hub",
        location: "Whitefield, Bengaluru"
    },
    {
        _id: "28",
        date: "18th Oct,2024  7:00-8:00",
        filterDate: "10/18/2024",
        sportIcon: tennis_icon,
        sportName: "Tennis",
        userImage: m_avatar1,
        userName: "Sanath P",
        membersJoined: 2,
        totalMembers: 4,
        level: "Intermediate",
        courtName: "Court Slam",
        location: "JP Nagar, Bengaluru"
    },
    {
        _id: "29",
        date: "18th Oct,2024  8:00-9:00",
        filterDate: "10/18/2024",
        sportIcon: swimming_icon,
        sportName: "Swimming",
        userImage: f_avatar4,
        userName: "Shreya R",
        membersJoined: 3,
        totalMembers: 4,
        level: "Intermediate",
        courtName: "AquaFit Arena",
        location: "JP Nagar, Bengaluru"
    },
    {
        _id: "30",
        date: "18th Oct,2024  9:00-10:00",
        filterDate: "10/18/2024",
        sportIcon: badminton_icon,
        sportName: "Badminton",
        userImage: f_avatar3,
        userName: "Ananya V",
        membersJoined: 1,
        totalMembers: 4,
        level: "Casual",
        courtName: "Smash Zone",
        location: "Koramangala, Bengaluru"
    },
    {
        _id: "31",
        date: "17th Oct,2024  9:00-10:00",
        filterDate: "10/17/2024",
        sportIcon: tabletennis_icon,
        sportName: "Table Tennis",
        userImage: m_avatar2,
        userName: "Raghav P",
        membersJoined: 2,
        totalMembers: 4,
        level: "Professional",
        courtName: "Ping Pong Club",
        location: "Jayanagar, Bengaluru"
    },
    {
        _id: "32",
        date: "18th Oct,2024  10:00-11:00",
        filterDate: "10/18/2024",
        sportIcon: volleyball_icon,
        sportName: "Volleyball",
        userImage: f_avatar5,
        userName: "Meghana S",
        membersJoined: 6,
        totalMembers: 10,
        level: "Intermediate",
        courtName: "Volley Zone",
        location: "Indiranagar, Bengaluru"
    },
    {
        _id: "33",
        date: "18th Oct,2024  11:00-12:00",
        filterDate: "10/18/2024",
        sportIcon: swimming_icon,
        sportName: "Swimming",
        userImage: m_avatar1,
        userName: "Aryan B",
        membersJoined: 2,
        totalMembers: 4,
        level: "Casual",
        courtName: "Blue Wave Club",
        location: "Banashankari, Bengaluru"
    },
    {
        _id: "34",
        date: "18th Oct,2024  12:00-14:00",
        filterDate: "10/18/2024",
        sportIcon: cricket_icon,
        sportName: "Cricket",
        userImage: m_avatar4,
        userName: "Shreyas V",
        membersJoined: 9,
        totalMembers: 22,
        level: "Intermediate",
        courtName: "Max Turf",
        location: "HSR Layout, Bengaluru"
    },
    {
        _id: "35",
        date: "18th Oct,2024  14:00-15:30",
        filterDate: "10/18/2024",
        sportIcon: volleyball_icon,
        sportName: "Volleyball",
        userImage: m_avatar5,
        userName: "Harish A",
        membersJoined: 5,
        totalMembers: 10,
        level: "Professional",
        courtName: "Ace Sports Club",
        location: "Frazer Town, Bengaluru"
    },
    {
        _id: "36",
        date: "16th Oct,2024  16:00-17:00",
        filterDate: "10/16/2024",
        sportIcon: tabletennis_icon,
        sportName: "Table Tennis",
        userImage: f_avatar1,
        userName: "Priya G",
        membersJoined: 2,
        totalMembers: 4,
        level: "Casual",
        courtName: "Spin Arena",
        location: "Whitefield, Bengaluru"
    },
    {
        _id: "37",
        date: "19th Oct,2024  8:00-10:00",
        filterDate: "10/19/2024",
        sportIcon: basketball_icon,
        sportName: "Basketball",
        userImage: m_avatar4,
        userName: "Varun T",
        membersJoined: 6,
        totalMembers: 15,
        level: "Intermediate",
        courtName: "Hoop House",
        location: "Electronic City, Bengaluru"
    },
    {
        _id: "38",
        date: "19th Oct,2024  9:00-10:30",
        filterDate: "10/19/2024",
        sportIcon: badminton_icon,
        sportName: "Badminton",
        userImage: f_avatar1,
        userName: "Soumya K",
        membersJoined: 2,
        totalMembers: 4,
        level: "Professional",
        courtName: "Racquet Zone",
        location: "Hennur, Bengaluru"
    },
    {
        _id: "39",
        date: "19th Oct,2024  10:00-11:00",
        filterDate: "10/19/2024",
        sportIcon: squash_icon,
        sportName: "Squash",
        userImage: m_avatar5,
        userName: "Tarakeshwar K",
        membersJoined: 3,
        totalMembers: 4,
        level: "Casual",
        courtName: "ProFit Arena",
        location: "Uttarahalli, Bengaluru"
    },
    {
        _id: "40",
        date: "19th Oct,2024  11:00-13:00",
        filterDate: "10/19/2024",
        sportIcon: football_icon,
        sportName: "Football",
        userImage: f_avatar3,
        userName: "Nishmitha S",
        membersJoined: 10,
        totalMembers: 11,
        level: "Intermediate",
        courtName: "Sprint Field",
        location: "RT Nagar, Bengaluru"
    }
    
        
];
export const COURT_list = [
    {
        _id: "court_cricket_3",
        courtName: "Pitch Perfect",
        sport: "Cricket",
        courtLocation: "Basavanagudi, Bengaluru",
        courtsAvailable: 4,
        price: 1000,
        courtImage: ccourt3,
        game_icon: cricket_icon,
        rating: 4.3
    },
    {
        _id: "court_badminton_5",
        courtName: "Racquet Paradise",
        sport: "Badminton",
        courtLocation: "Indiranagar, Bengaluru",
        courtsAvailable: 2,
        price: 250,
        courtImage: bcourt5,
        game_icon: badminton_icon,
        rating: 4.7
    },
    {
        _id: "court_tabletennis_1",
        courtName: "Spin City",
        sport: "Table Tennis",
        courtLocation: "Whitefield, Bengaluru",
        courtsAvailable: 1,
        price: 200,
        courtImage: tcourt1,
        game_icon: tabletennis_icon,
        rating: 4.5
    },
    {
        _id: "court_volleyball_1",
        courtName: "Spike Zone",
        sport: "Volleyball",
        courtLocation: "Koramangala, Bengaluru",
        courtsAvailable: 2,
        price: 220,
        courtImage: vcourt1,
        game_icon: volleyball_icon,
        rating: 4.2
    },
    {
        _id: "court_badminton_1",
        courtName: "Sky Smash Arena",
        sport: "Badminton",
        courtLocation: "Koramangala, Bengaluru",
        courtsAvailable: 3,
        price: 200,
        courtImage: bcourt1,
        game_icon: badminton_icon,
        rating: 4.4
    },
    {
        _id: "court_tabletennis_2",
        courtName: "Table Tango",
        sport: "Table Tennis",
        courtLocation: "MG Road, Bengaluru",
        courtsAvailable: 5,
        price: 175,
        courtImage: tcourt2,
        game_icon: tabletennis_icon,
        rating: 4.6
    },
    {
        _id: "court_volleyball_2",
        courtName: "Net Warriors",
        sport: "Volleyball",
        courtLocation: "Indiranagar, Bengaluru",
        courtsAvailable: 3,
        price: 250,
        courtImage: vcourt2,
        game_icon: volleyball_icon,
        rating: 4.1
    },
    {
        _id: "court_badminton_3",
        courtName: "Victory Court",
        sport: "Badminton",
        courtLocation: "MG Road, Bengaluru",
        courtsAvailable: 5,
        price: 230,
        courtImage: bcourt3,
        game_icon: badminton_icon,
        rating: 4.3
    },
    {
        _id: "pool_swimming_1",
        courtName: "Aqua Bliss",
        sport: "Swimming",
        courtLocation: "Indiranagar, Bengaluru",
        courtsAvailable: 3,
        price: 450,
        courtImage: scourt1,
        game_icon: swimming_icon,
        rating: 4.8
    },
    {
        _id: "court_volleyball_3",
        courtName: "Beach Vibes",
        sport: "Volleyball",
        courtLocation: "Jayanagar, Bengaluru",
        courtsAvailable: 4,
        price: 280,
        courtImage: vcourt3,
        game_icon: volleyball_icon,
        rating: 4.5
    },
    {
        _id: "court_badminton_4",
        courtName: "Net Masters",
        sport: "Badminton",
        courtLocation: "Whitefield, Bengaluru",
        courtsAvailable: 1,
        price: 240,
        courtImage: bcourt4,
        game_icon: badminton_icon,
        rating: 4.2
    },
    {
        _id: "court_cricket_1",
        courtName: "Cricket Central",
        sport: "Cricket",
        courtLocation: "HSR Layout, Bengaluru",
        courtsAvailable: 2,
        price: 1200,
        courtImage: ccourt1,
        game_icon: cricket_icon,
        rating: 4.6
    },
    {
        _id: "court_badminton_2",
        courtName: "Feather Flight",
        sport: "Badminton",
        courtLocation: "Jayanagar, Bengaluru",
        courtsAvailable: 4,
        price: 220,
        courtImage: bcourt2,
        game_icon: badminton_icon,
        rating: 4.4
    },
    {
        _id: "pool_swimming_2",
        courtName: "Blue Lagoon",
        sport: "Swimming",
        courtLocation: "Koramangala, Bengaluru",
        courtsAvailable: 5,
        price: 500,
        courtImage: scourt2,
        game_icon: swimming_icon,
        rating: 4.9
    },
    {
        _id: "court_cricket_2",
        courtName: "Boundary Line",
        sport: "Cricket",
        courtLocation: "Kalyan Nagar, Bengaluru",
        courtsAvailable: 3,
        price: 1100,
        courtImage: ccourt2,
        game_icon: cricket_icon,
        rating: 4.7
    },
    {
        _id: "pool_swimming_4",
        courtName: "Crystal Clear",
        sport: "Swimming",
        courtLocation: "Malleswaram, Bengaluru",
        courtsAvailable: 4,
        price: 600,
        courtImage: scourt4,
        game_icon: swimming_icon,
        rating: 4.3
    },
    {
        _id: "pool_swimming_3",
        courtName: "Splash Wave",
        sport: "Swimming",
        courtLocation: "Whitefield, Bengaluru",
        courtsAvailable: 2,
        price: 400,
        courtImage: scourt3,
        game_icon: swimming_icon,
        rating: 4.1
    }
];

*/}
