import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const FirebaseInitialize = () => {
    const init = initializeApp(firebaseConfig);
    return init;
}

export default FirebaseInitialize;