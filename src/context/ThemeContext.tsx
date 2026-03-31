import { createContext, useState, useMemo } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
    mode: ThemeMode;
    toggle: () => void;
    setMode: (m: ThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: any }) => {
    const [mode, setMode] = useState<ThemeMode>("light");
    const toggle = () => setMode((m) => (m === "light" ? "dark" : "light"));

    const algorithm = useMemo(
        () => (mode === "light" ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm),
        [mode]
    );

    return (
        <ThemeContext.Provider value={{ mode, toggle, setMode }}>
            <ConfigProvider theme={{ algorithm }}>{children}</ConfigProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
