import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../domain/Home";
import Article from "../../domain/Articles";

export const Routing = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles" component={Home} />
      <Route exact path="/articles/new" component={Home} />
      <Route path="/articles/:id" component={Article} />
      <Route exact path="/signin" component={Home} />
    </Router>
  );
};
