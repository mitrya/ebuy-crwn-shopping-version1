import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
  apiKey: "AIzaSyAsJvAPPS-jGPLNQVAtF7ZdLazgk4qYM1I",
  authDomain: "ebuy-db-6b66e.firebaseapp.com",
  projectId: "ebuy-db-6b66e",
  storageBucket: "ebuy-db-6b66e.appspot.com",
  messagingSenderId: "420815050891",
  appId: "1:420815050891:web:a37aa6ebe68f2683749c8e",
  measurementId: "G-LJ48VR5ZH1"
}

firebase.initializeApp(config)

const auth = firebase.auth()
const firestore = firebase.firestore()

export const createUserProfileDocument= async(userAuth,additionalData)=>
{ 
  if(!userAuth) 
     return;
  
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(userRef);
  if(!snapShot.exists)
  {
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
       ...additionalData
      })
    }
    catch(error)
    {
      alert(error);
    }
  }
  return userRef;
}


const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
const signInWithGoogle = () => auth.signInWithPopup(provider);

export {auth,firestore,signInWithGoogle};