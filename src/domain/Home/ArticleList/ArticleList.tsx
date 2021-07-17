import { Card } from "../../../components";
import { Box } from "@material-ui/core";
import React from "react";

export const ArticleList = React.memo(() => {
  return (
    <Box width={{ xs: "100%", sm: "90%", md: "60%", lg: "50%", xl: "50%" }}>
      <Box mr={{ xs: 1, sm: 3 }} ml={{ xs: 1, sm: 3 }}>
        <Card
          title="おはようございます"
          date="2021-07-12"
          tags={["react", "docker", "雑談"]}
        />
        <Card
          title="sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample"
          date="2021-07-12"
          tags={["react", "docker", "雑談"]}
        />
        <Card
          title="hello"
          date="2021-07-12"
          tags={["react", "docker", "雑談"]}
        />
        <Card
          title="hello"
          date="2021-07-12"
          tags={["react", "docker", "雑談"]}
        />
        <Card
          title="hello"
          date="2021-07-12"
          tags={["react", "docker", "雑談"]}
        />
        <Card
          title="hello"
          date="2021-07-12"
          tags={["react", "docker", "雑談"]}
        />
        <Card
          title="hello"
          date="2021-07-12"
          tags={["react", "docker", "雑談"]}
        />
        <Card
          title="hello"
          date="2021-07-12"
          tags={["react", "docker", "雑談"]}
        />
        <Card
          title="hello"
          date="2021-07-12"
          tags={["react", "docker", "雑談"]}
        />
        <Card
          title="hello"
          date="2021-07-12"
          tags={["react", "docker", "雑談"]}
        />
        <Card
          title="hello"
          date="2021-07-12"
          tags={["react", "docker", "雑談"]}
        />
        <Card
          title="hello"
          date="2021-07-12"
          tags={["react", "docker", "雑談"]}
        />
      </Box>
    </Box>
  );
});
