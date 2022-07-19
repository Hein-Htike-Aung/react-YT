import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCsosFPLKacnk3yYZMQOpYxNyu43VIym9g',
	authDomain: 'react-yt-85cc2.firebaseapp.com',
	projectId: 'react-yt-85cc2',
	storageBucket: 'react-yt-85cc2.appspot.com',
	messagingSenderId: '173144395359',
	appId: '1:173144395359:web:d4af5dbbfa87736c1415ea',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

export default app;
