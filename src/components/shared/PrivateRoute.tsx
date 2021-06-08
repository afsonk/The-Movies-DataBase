import {Redirect, Route, RouteProps} from "react-router-dom"
import {useAuth} from "../../context/AuthState"


interface PrivateRouteProps extends RouteProps {
    component?: any;
    children?: any;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
    const {component: Component, children, ...rest} = props
    const {currentUser} = useAuth()
    return (
        <Route
            {...rest}
            render={routeProps =>
                currentUser ? (
                    Component ? (
                        <Component {...routeProps} />
                    ) : (
                        children
                    )
                ) : (
                    <Redirect
                        to={'/login'}
                    />
                )
            }
        />
    )
}
