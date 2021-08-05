import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Layout from "./Components/Layout/Layout";
import Results from "./pages/Results/Results";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route component={Home} path="/" exact></Route>
          <Route component={AboutUs} path="/AboutUs" exact></Route>
          <Route component={Results} path="/Results" exact></Route>
          <Route component={AboutUs} path="/AboutUs" exact></Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
