Boilerplate React Native + Firebase + Typescript app with built in authentication and firestore hooks. 


## Stack
- [Expo](https://expo.dev/)
- [Native Base](https://nativebase.io/) UI components
- [Firebase](https://firebase.google.com/docs) and [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks)
## Getting Started

Before you run anything you'll need to [setup your Firebase credentials](https://firebase.google.com/docs/web/setup). Open the `example.env` file and add the values for the Firebase API keys, then rename the file to `.env`. This will prevent your keys from ever being exposed. 

Create an [Expo](https://expo.dev/) account if you do not already have one. 

Install all the dependencies

`yarn install`

## Scripts
Start the expo development server

`yarn expo start`

## Project Structure

### Unauthenticated Routes
- Splash
- Create account
- Log in

### Authenticated Routes
- Dashboard
  - categories and entries table
- Create category
- Create entry
- Settings