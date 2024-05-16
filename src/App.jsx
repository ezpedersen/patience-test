// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  setDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import Titlebar from "./components/Titlebar";
import Question from "./components/Question";
import { useState } from "react";
import { useEffect } from "react";
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

  const colRef = collection(db, "opinions");
  const auth = getAuth();

  const [question, setQuestion] = useState("What is your unweighted GPA?");
  const [num, setNum] = useState(0);
  const [responses, setResponses] = useState([]);
  let questions;
  fetch("/questions.json")
    .then((response) => response.json())
    .then((data) => {
      questions = data;
      console.log(questions.length);
    })
    .catch((error) => {
      console.error("Error fetching questions:", error);
    });
  const [docId, setDocId] = useState();
  const getAnswer = (a) => {
    if (question === "What is your unweighted GPA?") {
      console.log("first question");
      signInAnonymously(auth);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          const nnum = num + 1;
          const nresponses = [
            { question: "#" + nnum + ". " + question, answer: parseFloat(a) },
          ];
          setDoc(doc(db, "opinions", uid), {
            id: uid,
            gpa: parseFloat(a),
            numAnswered: nnum,
            responses: nresponses,
          });
          setDocId(uid);
          setNum(nnum);
          setResponses(nresponses);
          setQuestion(questions[num]);
        }
      });
    } else {
      const nnum = num + 1;
      const nresponses = [
        ...responses,
        { question: "#" + nnum + ". " + question, answer: a },
      ];
      updateDoc(doc(db, "opinions", docId), {
        responses: nresponses,
        numAnswered: nnum,
      });
      setNum(nnum);
      setResponses(nresponses);
      setQuestion(questions[num]);
    }
  };
  return (
    <>
      <Titlebar></Titlebar>
      <div className="flex justify-center items-center h-[calc(100vh-80px-76px)] overflow-auto">
        {num === 178 ? (
          <div className=" bg-amber-200 p-7 rounded-xl m-10 border-yellow-950 border-2">
            <h1 className="block mb-5 text-xl font-semibold text-gray-900 mr-4">
              Wow! You answered all of those questions...
            </h1>
            <p>
              First person to message eriped235@fusdk12.net on your <br></br>
              school email with the code "boingo1" gets something idk.
            </p>
            <p>your name here ig.</p>
          </div>
        ) : (
          <Question num={num + 1} setAnswer={getAnswer} question={question} />
        )}
      </div>
      <footer className="bg-blue-500 p-6 text-white text-xl font-thin">
        Please take a brief moment to complete this for our AP Statistics
        Project. Thank you!
      </footer>
    </>
  );
}

export default App;
