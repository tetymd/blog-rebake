import {
  styled,
  Card as MuiCard,
  CardContent,
  Typography,
  Box
} from "@material-ui/core";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ThemeContext } from "../services/Contexts";

const TitleText = styled(Typography)({
  fontWeight: "bold"
});

const DateBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end"
});

const TagBox = styled(Box)({
  display: "flex"
});

export const Card = React.memo((props: any) => {
  const { theme } = useContext(ThemeContext);
  const { title, date, tags } = props;
  let items: any[] = [];
  for (let i in tags) {
    items.push(
      <Box mt={1} ml={1} key={i}>
        <Typography variant="caption">{tags[i]}</Typography>
      </Box>
    );
  }

  let background = "rgb(255, 255, 255)";
  if (theme !== "light") background = "rgb(31, 41, 55)";
  const Panel = styled(MuiCard)({
    backgroundColor: background,
    backdropFilter: "blur(10px)",
    borderRadius: 0,
    boxShadow: "none",
    transition: "all 0.6s 0s ease-out",
    "&:hover": {
      backgroundColor: "rgba(204,204,255,0.6)"
    }
  });

  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Panel>
        <CardContent>
          <TitleText variant="body1">{title}</TitleText>
          <TagBox>{items}</TagBox>
          <DateBox mt={2}>
            <Typography variant="caption">{date}</Typography>
          </DateBox>
        </CardContent>
      </Panel>
    </motion.div>
  );
});
