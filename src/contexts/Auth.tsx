import {
  createContext, // ReactNode, useContext,
  // useEffect,
  useState,
} from "react";

// import { supabase } from "api/supabase";
// import { EMAILANDPWD, AUTHCONTEXT, USER } from "types";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
//   // const data = await supabase.from("notes").select()
//   // console.log(data);
// };
//
// myuser();
//
// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<USER | null>(null);
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     async function getUser() {
//       // const { data } = await supabase.auth.getUser()
//       // console.log(data);
//       // setUser(data.user)
//     }
//     getUser();
//   }, []);
//
//   const value: any = {
//     signup: (data: EMAILANDPWD) => {
//       // supabase.auth.signUp(data);
//     },
//     signin: (data: EMAILANDPWD) => {
//       // supabase.auth.signInWithPassword(data);
//     },
//     signout: () => {
//       // supabase.auth.signOut();
//     },
//     user,
//   };
//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }
//
// export function useAuth() {
//   return useContext(AuthContext);
// }
