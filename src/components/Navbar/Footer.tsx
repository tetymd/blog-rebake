import { AppBar as MuiBar, Toolbar, Box, styled } from "@material-ui/core";

const AppBar = styled(MuiBar)({
  // backgroundColor: "rgba(255, 255, 255, 0.3)",
  backgroundColor: "rgba(31, 41, 55, 0.3)",
  backdropFilter: "blur(10px)",
  boxShadow: "none"
});

// const Brand = styled(Typography)({
//   fontWeight: "bold"
// });

const CtmBox = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "center"
});

export const Footer = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <CtmBox>{/* <Brand>TECHI BLOG</Brand> */}</CtmBox>
      </Toolbar>
    </AppBar>
  );
};
