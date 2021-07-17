import { Box, Card, styled } from "@material-ui/core";
import React from "react";
import MDEditor from "@uiw/react-md-editor";

const md = `
  # sample投稿
  **Markdown**最高！！！！！
`;
const ArticleBox = styled(Box)({
  display: "frex",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center"
});

const CtmBox = styled(Box)({
  // flex: 1
});

const MdCard = styled(Card)({
  background: "white"
});

export const Article = () => {
  return (
    <ArticleBox>
      <CtmBox
        width={{ xs: "100%", md: "75%", lg: "60%" }}
        // mr={{ xs: 1, sm: 3 }}
        // ml={{ xs: 1, sm: 3 }}
      >
        <MdCard>
          <MDEditor.Markdown source={md} />
        </MdCard>
      </CtmBox>
    </ArticleBox>
  );
};
