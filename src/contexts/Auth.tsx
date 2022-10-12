import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate  } from "react-router-dom"
import { supabase } from "api/supabase";
import { EMAILANDPWD, AUTHCONTEXT, USER } from "types";

const AuthContext = createContext<AUTHCONTEXT >({});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<USER | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);
    setLoading(false);
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );
    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value: any  = {
    signup: (data: EMAILANDPWD) => {
      supabase.auth.signUp(data);
    },
    signin: (data: EMAILANDPWD) => {
      supabase.auth.signIn(data);
    },
    signout: () => {
      supabase.auth.signOut();
    },
    user,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
