import React from "react";
import { Box, styled } from "@material-ui/core";
import ArticleList from "./ArticleList";

const ListLayout = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center"
});

export const Home = React.memo(() => {
  return (
    <ListLayout>
      <ArticleList />
    </ListLayout>
  );
});
