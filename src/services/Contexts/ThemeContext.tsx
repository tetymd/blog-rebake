import React, { useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

const lightTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          fontFamily: "'roboto'",
          backgroundColor: "#FFFFFF"
          // "linear-gradient(180deg, rgba(142,203,222,1) 0%, rgba(142,222,197,1) 100%)"
        }
      }
    },
    MuiTypography: {
      root: {
        color: "#333344"
      }
    }
  }
});

const darkTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          fontFamily: "'roboto'",
          backgroundColor: "rgb(31, 41, 55)"
          // "linear-gradient(180deg, rgba(142,203,222,1) 0%, rgba(142,222,197,1) 100%)"
        }
      }
    },
    MuiTypography: {
      root: {
        color: "rgb(229, 231, 235)"
      }
    }
  }
});

export const ThemeContext = React.createContext(
  {} as {
    theme: String;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
  }
);

export const ThemeContextProvider = React.memo(({ children, ...res }: any) => {
  const [theme, setTheme] = useState("light");
  const value = {
    theme,
    setTheme
  };

  let themeStyle = lightTheme;
  if (theme === "dark") themeStyle = darkTheme;

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={themeStyle}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
});
