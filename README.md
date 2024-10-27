# PlayScout

**PlayScout** is a sports facility booking platform where users can explore venues, join games, and communicate with other players in real-time. This project leverages the **MERN stack** (MongoDB, Express, React, Node.js) with integrated real-time chat functionality.

> **Note**: This project is currently a work in progress. Only the frontend has been completed as of yet.

## Features

- **Sports Facility Booking**: Search and book facilities for various sports.
- **Explore Players and Venues**: Browse players and venues via a responsive, scrollable UI.
- **Real-Time Chat**: Connect with other players in game-specific chat rooms.
- **Authentication**: User registration and login with access to personalized features.
- **Responsive Design**: Optimized for mobile and desktop views.

## Preview

![PlayScout Homepage](assets/screenshot.png)

## Tech Stack

- **Frontend**: React, Socket.IO Client
- **Backend**: Node.js, Express, MongoDB, Socket.IO
- **Build Tool**: Vite

## Installation and Setup

### Prerequisites
- **Node.js** and **npm**
- **MongoDB** instance (local or cloud)

### Instructions

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/playscout.git
    cd playscout
    ```

2. **Backend**:
    - Go to the `backend` folder, install dependencies, set up a `.env` file with your `MONGO_URI` and `JWT_SECRET`, then start the server:

        ```bash
        cd backend
        npm install
        npm start
        ```

3. **Frontend**:
    - Go to the `frontend` folder, install dependencies, then start the app:

        ```bash
        cd ../frontend
        npm install
        npm run dev
        ```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:5000` by default.

## Usage

1. **Sign Up/Login**: Create an account to access all features.
2. **Explore Venues and Players**: Scroll through lists and view details of available venues and players.
3. **Booking**: Select a venue, choose a time slot, and book.
4. **Chat**: Join a game and chat with other participants in real-time.

---
