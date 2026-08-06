import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../config/firebase";

export type UserRole = "admin" | "superadmin" | null;

interface AuthState {
  user: User | null;
  role: UserRole;
  loading: boolean;
}

export function useAuth(): AuthState {
  const [state, setState] = useState<AuthState>({
    user: null,
    role: null,
    loading: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setState({ user: null, role: null, loading: false });
        return;
      }

      const tokenResult = await user.getIdTokenResult();
      const claims = tokenResult.claims as Record<string, unknown>;

      let role: UserRole = null;
      if (claims.role === "superadmin") {
        role = "superadmin";
      } else if (claims.clientId) {
        role = "admin";
      }

      setState({ user, role, loading: false });
    });

    return unsubscribe;
  }, []);

  return state;
}
