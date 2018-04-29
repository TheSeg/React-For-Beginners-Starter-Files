import Rebase from 're-base';
import firebase from 'firebase';
import { firebaseAuth } from './firebase-auth';

const firebaseApp = firebase.initializeApp(firebaseAuth);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;