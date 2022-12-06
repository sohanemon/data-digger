import { ReactNode, useState } from "react";
import { createContext, useContext } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/app";

interface Props {
  children: ReactNode;
}

type auth = {
  googleLogin?: Function;
  logOut?: Function;
  user?: {};
};
const auth = getAuth(app);
const Auth = createContext<auth>({});
export const useAuth = () => useContext(Auth);
const AuthContext: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState({});
  const googleLogin = () => {
    console.log("first");
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logOut = () => {
    signOut(auth)
      .then((_) => setUser({}))
      .catch((_) => console.log(_));
  };

  return (
    <Auth.Provider value={{ googleLogin, logOut, user }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
