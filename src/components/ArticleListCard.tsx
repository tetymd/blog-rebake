import { Card, CardContent } from "@material-ui/core";

export const ArticleListCard = (props: any) => {
  console.log(props);
  return (
    <Card>
      <CardContent>
        <p>{props.data}</p>
      </CardContent>
    </Card>
  );
};
