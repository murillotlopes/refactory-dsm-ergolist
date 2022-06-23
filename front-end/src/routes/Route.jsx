import { Redirect, Route as ReactRoute } from 'react-router-dom'
import { useAuth } from '../providers/AuthContext'

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
    const { token } = useAuth()
    return (
        <ReactRoute {...rest}
            render={() =>
                isPrivate === !!token
                    ? (<Component />)
                    : (<Redirect to={isPrivate ? '/' : 'dashboard'} />)}
        >
        </ReactRoute>
    )
}