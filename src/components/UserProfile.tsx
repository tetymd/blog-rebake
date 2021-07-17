import React from "react";
import { Box, styled, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar } from "@material-ui/core";

const Profile = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  heigth: "100%"
});

const IconBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end"
});

const AvatarBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "1.5rem"
});

const AvatarIcon = styled(Avatar)({
  position: "absolute",
  width: 100,
  height: 100,
  justifyContent: "center",
  alignItems: "center"
});

const Text = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "0.4em",
  textAlign: "center"
});

const SnsIconBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const SnsIcon = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: [0, 0, 0, 1.15, 1] }}
      transition={{ duration: 1, easings: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export const UserProfile = (props: any) => {
  return (
    <AnimatePresence exitBeforeEnter={false}>
      {props.state && (
        <motion.div
          layout
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background:
              "linear-gradient(180deg, rgba(142,203,222,1) 0%, rgba(142,222,197,1) 100%)"
          }}
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            when: "beforeChildren",
            duration: 0.6,
            easings: "easeInOut"
          }}
          exit={{ x: "100vw", opacity: 0 }}
        >
          <Box mt={4} mr={4} mb={4} ml={4}>
            <IconBox mb={10}>
              <CloseIcon
                fontSize="large"
                onClick={() => {
                  props.callback(!props.state);
                }}
              />
            </IconBox>
            <Profile>
              <SnsIcon>
                <AvatarBox>
                  <motion.div
                    style={{
                      position: "relative",
                      top: 0,
                      left: 0,
                      width: 100,
                      height: 100,
                      background: "#8888AA",
                      borderRadius: 100
                    }}
                    animate={{ x: [0, 0, 0, 10], y: [0, 0, 0, 10] }}
                    transition={{ duration: 1.5 }}
                  />
                  <AvatarIcon alt="Tetsuya Yamada" src="/icon.jpg" />
                </AvatarBox>
                <Text variant="h5">Tetsuya Yamada</Text>
                <Text>Web Developer</Text>
              </SnsIcon>
              <SnsIconBox mt={3}>
                <Box mr={4}>
                  <SnsIcon>
                    <GitHubIcon style={{ fontSize: 30, color: "#333333" }} />
                  </SnsIcon>
                </Box>
                <SnsIcon>
                  <TwitterIcon style={{ fontSize: 36, color: "#55acee" }} />
                </SnsIcon>
              </SnsIconBox>
            </Profile>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
