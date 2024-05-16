// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import Titlebar from "./components/Titlebar";
import Question from "./components/Question";
function App() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCZhpuRP6u1Jq8-wHQk89MjWiFqt7WZRzk",
    authDomain: "irvington-opinions.firebaseapp.com",
    projectId: "irvington-opinions",
    storageBucket: "irvington-opinions.appspot.com",
    messagingSenderId: "70020841721",
    appId: "1:70020841721:web:4e6d63b30a505e3053a228",
    measurementId: "G-9BLTXQ9CQM",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();

  // const colRef = collection(db, "opinions");
  // const auth = getAuth();
  // signInAnonymously(auth);
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     addDoc(colRef, {id: uid, gpa: 3, numAnswered: 1 });
  //   }
  // });
  return (
    <>
      <Titlebar></Titlebar>
      <div className="flex justify-center items-center h-[calc(100vh-80px)] overflow-auto">
        <Question></Question>
      </div>
    </>
  );
}

export default App;
