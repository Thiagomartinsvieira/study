import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCYtYe24_kqCtz4rRT7IIApXBA9yD6FYCA',
  authDomain: 'miniblog-1867c.firebaseapp.com',
  projectId: 'miniblog-1867c',
  storageBucket: 'miniblog-1867c.appspot.com',
  messagingSenderId: '788308826628',
  appId: '1:788308826628:web:a5059705cff499a4f8b351',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
