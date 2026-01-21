// import React, { useEffect, useState } from 'react';
// import { AuthContext } from './AuthContext';
// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
// import { auth } from '../../firebase/firebase.init';

// const googleProvider = new GoogleAuthProvider();


// const AuthProvider = ({children}) => {

//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(null);

//     const createUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     }
    
//     const signInUser = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     useEffect(() => {
//         const unSubcribe = onAuthStateChanged(auth, currentUser => {

//             setLoading(false);
//             setUser(currentUser);
//             console.log('user in the on auth state change', currentUser);
//         })
//         return () => {
//             unSubcribe();
//         }
//     },[])

//     const signInWithGoogle = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }


//     const signOutUser = () => {
//         setLoading(true);
//         return signOut(auth);
        
//     }


//     const authInfo = {
//         loading,
//         user,
//         createUser,
//         signInUser,
//         signInWithGoogle,
//         signOutUser
//     }

//     return (
//         <AuthContext value={authInfo}>
//             {children}
//         </AuthContext>
//     );
// };

// export default AuthProvider;

import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    const createUser = async (email, password, name, photoURL) => {
        setLoading(true);
        const result = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(result.user, {
            displayName: name,
            photoURL: photoURL
        });

        return result;
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('Auth State Changed User:', currentUser);
        });
        return () => unSubcribe();
    }, []);

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
