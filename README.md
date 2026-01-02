# Preferences & Auth App

## Student Information
- Name:Zerrin Yaşik
- Student ID:210408008

## Project Description
This project is a multi-screen React Native application developed for Mobile Programming – Lab 12.

The application demonstrates real-world state management and local persistence concepts using:
- React Hooks
- Context API
- AsyncStorage
- Custom Hooks

## Features
- Login / Logout flow (mock authentication)
- Global user state management with Context API
- Persisted login session using AsyncStorage
- Theme preference (light / dark) with persistence
- Settings screen
- Custom hook for theme logic reuse
- Clean navigation flow with authentication guard

## Screens
- Login Screen
- Home Screen
- Settings Screen

## Technologies Used
- React Native
- Expo
- React Navigation (Native Stack)
- Context API
- AsyncStorage

## Project Structure
PreferencesApp
├── App.js
├── context
│ └── AuthContext.js
├── hooks
│ └── useTheme.js
├── screens
│ ├── LoginScreen.js
│ ├── HomeScreen.js
│ └── SettingsScreen.js
├── package.json
└── README.md

bash
Kodu kopyala

## Setup Instructions
1. Clone the repository:
```bash
git clone https://github.com/Zerrin536/preferences-auth-app.git
Navigate to the project directory:

bash
Kodu kopyala
cd preferences-auth-app
Install dependencies:

bash
Kodu kopyala
npm install
Start the application:

bash
Kodu kopyala
npx expo start
Run the app using Expo Go or an emulator.

Notes
Login state persists after app restart.

Logout clears stored authentication data.

Theme preference is saved locally.

Clean commit history maintained for each lab part.
