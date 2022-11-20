import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, getReactNativePersistence } from 'firebase/auth';
// import {...} from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDnqs3QB32y3e2NGo564Cf3U6w1eSVDnoA',
  authDomain: 'chorts-9846b.firebaseapp.com',
  projectId: 'chorts-9846b',
  storageBucket: 'chorts-9846b.appspot.com',
  messagingSenderId: '794866220916',
  appId: '1:794866220916:web:66779b7aa586522edff621',
  measurementId: 'G-KGJGXECK7S',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };