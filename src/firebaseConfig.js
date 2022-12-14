import { getApp , getApps , initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
// require('dotenv').config()

const firebaseConfig = {
  
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL, 
    projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSGING_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId:  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)

export const storage = getStorage(app)