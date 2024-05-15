import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAv4wVGGgvdbnql4JibRHEl_x8Bkr9yTd8",
    authDomain: "patience-test-cf25c.firebaseapp.com",
    projectId: "patience-test-cf25c",
    storageBucket: "patience-test-cf25c.appspot.com",
    messagingSenderId: "471248396275",
    appId: "1:471248396275:web:51a9134f70f870e4937c86",
    measurementId: "G-PT7LTB2WPK",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <>
      <h1>Hello WOrld!</h1>
    </>
  );
}

export default App;
