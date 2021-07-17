import { Button as MuiButton } from "@material-ui/core";

export const Button = (props: any) => {
  return <MuiButton onClick={props.handler}>{props.text}</MuiButton>;
};
