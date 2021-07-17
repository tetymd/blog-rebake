import { Box, Typography, styled } from "@material-ui/core";

const Controller = styled(Box)({});

const ControllerText = styled(Typography)({
  fontWeight: "bold"
});

export const ListController = () => {
  return (
    <Controller mb={3}>
      <ControllerText align="center" variant="h6">
        ALL
      </ControllerText>
    </Controller>
  );
};
