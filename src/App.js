import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Layout from "./Components/Layout/Layout";
import Results from "./pages/Results/Results";
import VoterSection from "./pages/VoterSection/VoterSection";
import VoteSuccessful from "./pages/VoteSuccessful/VoteSuccessful";
import Admin from "./pages/Admin/Admin";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import CandidateLogin from "./pages/CandidateLogin/CandidateLogin";
import VoterLogin from "./pages/VoterLogin/VoterLogin";
import { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          {isLogin ? (
            <Route component={Home} path="/" exact></Route>
          ) : (
            <Route path="/" exact>
              <VoterLogin setIsLogin={setIsLogin} />
            </Route>
          )}
          <Route component={Home} path="/" exact></Route>
          <Route component={AboutUs} path="/AboutUs" exact></Route>
          <Route component={Results} path="/Results" exact></Route>
          <Route component={VoterSection} path="/VoterSection" exact></Route>
          <Route component={Admin} path="/Admin" exact></Route>
          <Route component={AdminLogin} path="/AdminLogin" exact></Route>
          <Route
            component={CandidateLogin}
            path="/CandidateLogin"
            exact
          ></Route>
          <Route
            component={VoteSuccessful}
            path="/VoteSuccessful"
            exact
          ></Route>
          <Route component={VoterLogin} path="/VoterLogin" exact></Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
