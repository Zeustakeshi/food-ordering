import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC_E7yANGD8quaJb05kq-5gqKGaQRweieQ",
    authDomain: "fit-me-oder.firebaseapp.com",
    projectId: "fit-me-oder",
    storageBucket: "fit-me-oder.appspot.com",
    messagingSenderId: "871916388278",
    appId: "1:871916388278:web:44989b57233ff24ccdcb17",
    measurementId: "G-XB5RG90BWJ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
