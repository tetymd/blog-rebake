import React, { useContext } from "react";
import { ThemeContext } from "../services/Contexts";
import { Box } from "@material-ui/core";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import NightsStayIcon from "@material-ui/icons/NightsStay";

export const ThemeChanger = React.memo(() => {
  let { theme, setTheme } = useContext(ThemeContext);
  return (
    <Box mr={{ xs: 1, sm: 2 }}>
      {theme === "light" ? (
        <Brightness5Icon
          style={{ fontSize: 40, color: "#DECE64" }}
          onClick={() => {
            setTheme("dark");
          }}
        />
      ) : (
        <NightsStayIcon
          style={{ fontSize: 40, color: "rgb(229, 231, 235)" }}
          onClick={() => {
            setTheme("light");
          }}
        />
      )}
    </Box>
  );
});
