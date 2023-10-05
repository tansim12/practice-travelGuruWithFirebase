import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [singleDataToSlider, setSingleDataToSlider] = useState({});

  // google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // facebook login
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // github login
  const githubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email and password sing in
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOut = () => {
    return signOut(auth);
  };
  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // profile update
  const profileUpdate = (name, img) => {
    console.log(img, name);
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    });
  };
  // verify account
  const verifyAccount = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  // delete Account
  const deleteAccount = () => {
    setLoading(true);
    return deleteUser(auth.currentUser);
  };

  // observe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // data fetch
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setData(data);
    };
    dataFetch();
  }, []);

  // get single data from slider
  const getSingleData = (singleData) => {
    setSingleDataToSlider(singleData);
  };
  console.log(singleDataToSlider);

  const info = {
    googleLogin,
    githubLogin,
    createUser,
    login,
    logOut,
    user,
    profileUpdate,
    resetPassword,
    verifyAccount,
    deleteAccount,
    facebookLogin,
    data,
    getSingleData,
    singleDataToSlider,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
