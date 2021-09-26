// import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { Suspense, lazy } from 'react'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Loading from "@components/loading";
import 'antd/dist/antd.css';
import routes from "./routes";
import useAuth from "./hook/auth";
import { useSelector } from 'react-redux';

const Login = lazy(() => import('@page/login'))
const Register = lazy(() => import('@page/register'))
function App() {
  // const isLogin = useSelector((state) => state.isLogin)
  const { isLogin, isLoading, token } = useAuth();
  if (isLoading) return <Loading />;
  return (<HashRouter>
    <Suspense fallback={() => <span>Loading</span>}>
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
    </Suspense>
  </HashRouter>)
}

export default App;