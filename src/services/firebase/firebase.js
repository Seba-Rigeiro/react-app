import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAKM6IyZrOfZxDT0I2RWma_Lp4b-T69EDc",
    authDomain: "react-app-ecommerce-815fc.firebaseapp.com",
    projectId: "react-app-ecommerce-815fc",
    storageBucket: "react-app-ecommerce-815fc.appspot.com",
    messagingSenderId: "546916042333",
    appId: "1:546916042333:web:d87b4292d0ffbd43182fb4"
  };

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)