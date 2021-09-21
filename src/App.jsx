// import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from '@page/login'
import Register from '@page/register'
import Loading from "@components/loading";
import 'antd/dist/antd.css';
import routes from "./routes";
import useAuth from "./hook/auth";
import { useSelector } from 'react-redux';

function App() {
  // const isLogin = useSelector((state) => state.isLogin)
  const { isLogin, isLoading, token } = useAuth();
  if (isLoading) return <Loading />;
  return <HashRouter>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" exact component={Login} />
      {/* {routes.publicRoutes.map((route) => {<Route key={route.path} path={route.path} exact={route.exact} component={route.component} />})} */}
      {/* {routes.publicRoutes.map((route) => {
        if (!isLogin) return <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
        else return <Redirect to="/" />
      })} */}
      {routes.privateRoutes.map((route) => {
        if (isLogin || token) return <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
        else return <Redirect to={route.backUrl} />
        // return token ? isLogin ? <Route key={route.path} path={route.path} exact={route.exact} component={route.component} /> : <Loading /> : <Redirect to={route.backUrl} />
      })}
    </Switch>
  </HashRouter>
}

export default App;