import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { environment } from '../../environments/environment';
 
firebase.initializeApp(environment.firebaseConfig);

export default firebase;