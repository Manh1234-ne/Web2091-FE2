import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthUser = {
    username?: string;
    email?: string;
    token?: string;
} | null;

type AuthState = {
    user: AuthUser;
    setUser: (data: AuthUser) => void;
    clearUser: () => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (data: AuthUser) => set({ user: data }),
            clearUser: () => set({ user: null }),
        }),
        {
            name: "user-storage",
        }
    )
);