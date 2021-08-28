import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from '../context';
import { privateRoutes, publickRoutes } from '../routes';
import { Loader } from './UI/Loader/Loader';

const AppRouter = () => {

    const {isAuth, setIsAuth, isLoading} = React.useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route => (
                    <Route key={route.id} component={route.component} path={route.path} exact={route.exact}/>
                ))}
                <Redirect to="/404" />
            </Switch>
            :
            <Switch>
                {publickRoutes.map(route => (
                    <Route key={route.id} component={route.component} path={route.path} exact={route.exact}/>
                ))}
                <Redirect exact to="/login" />
            </Switch>
    );
};

export default AppRouter;