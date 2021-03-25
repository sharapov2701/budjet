import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    apiKey: process.env.REACT_APP_API_KEY,
    appId: process.env.REACT_APP_APP_ID,
})

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase