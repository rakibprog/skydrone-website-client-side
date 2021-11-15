import {
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/firebaseInit";


FirebaseInitialize();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    const [smsError, setSmsError] = useState('');
    const [admin, setAdmin] = useState({});

   // new create user account
    const createNewUser = (email, password, name) => {
        setIsLoading(true);
        
         createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const userName = { email, displayName: name, photoURL: "https://i.ibb.co/hKN71Tg/770137-man-512x512.png" };
                setUser(userName);
                const img = "https://i.ibb.co/hKN71Tg/770137-man-512x512.png";
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: img
                })
                .then(() => {
                    // Profile updated!
                    // ...
                })
                .catch((error) => {
                    // An error occurred
                    // ...
                });
                //save user database
                saveUser(email,name,img);
                setSmsError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setSmsError(errorMessage);
            })
            .finally(() => setIsLoading(false));
        
    }
    
    //onAuthStateChanged(
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
    }, []);
    
    //sign in user
    const loginInUser = (email, password,location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                const beforeLocation = location?.state?.from || '/';
                history.push(beforeLocation);
                setSmsError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setSmsError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }
    
    // log out use
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
            // An error happened.
            })
            .finally(() => setIsLoading(false));
    }

    // save user database
    const saveUser = (email, displayName, photoURL) => {
        const users = { email, displayName, photoURL };
        fetch('https://arcane-bastion-51676.herokuapp.com/user', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                
            }).catch(error => {

            })
    }

    // get the admin role
    useEffect(() => {
        fetch(`https://arcane-bastion-51676.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            })
            .catch(error => {
            
            });
    },[user.email])



    return {
        user,
        logOut,
        createNewUser,
        loginInUser,
        isLoading,
        smsError,
        admin
    }

}

export default useFirebase;

