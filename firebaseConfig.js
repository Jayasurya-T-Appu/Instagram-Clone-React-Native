import * as firebase from 'firebase/app'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJDJlk5PMaGKos_M_CRrA2Ej8hkP0pkrY",
  authDomain: "instagram-clone-6955f.firebaseapp.com",
  projectId: "instagram-clone-6955f",
  storageBucket: "instagram-clone-6955f.appspot.com",
  messagingSenderId: "412715014230",
  appId: "1:412715014230:web:79ea893af06702446dc3f7"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistance: getReactNativePersistence(AsyncStorage)
});



export { auth , app};



/* !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase
 */ 


