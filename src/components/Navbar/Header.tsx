import {
  AppBar as MuiBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  styled
} from "@material-ui/core";
import { useContext, useState } from "react";
import { UserProfile } from "../UserProfile";
import { ThemeContext } from "../../services/Contexts";
import { ThemeChanger } from "../ThemeChanger";
import React from "react";

const Brand = styled(Typography)({
  flex: 4,
  fontWeight: 700
});

const AvatarBox = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end"
});

export const Header = React.memo(() => {
  const { theme } = useContext(ThemeContext);
  const [isDisplay, setIsDisplay] = useState(false);

  let background = "rgba(255, 255, 255, 0.3)";
  if (theme !== "light") background = "rgb(31, 41, 55, 0.3)";
  const AppBar = styled(MuiBar)({
    backgroundColor: background,
    backdropFilter: "blur(10px)",
    boxShadow: "none"
  });

  return (
    <AppBar>
      <Toolbar>
        <Brand variant="h5">TECHI BLOG</Brand>
        <AvatarBox>
          <ThemeChanger />
          <Avatar
            alt="Tetsuya Yamada"
            src="/icon.jpg"
            onClick={() => {
              setIsDisplay(!isDisplay);
            }}
          />
          <UserProfile state={isDisplay} callback={setIsDisplay} />
        </AvatarBox>
      </Toolbar>
    </AppBar>
  );
});
