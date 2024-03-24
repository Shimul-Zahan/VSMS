import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../Pages/Home'
import HomeLayout from '../Layout/Home/HomeLayout'
import { Login } from '../Auth_Form/Login'
import { Registration } from '../Auth_Form/Registration'
import Sidebard from '../Layout/Dash/Dashboard/Sidebard'
import Dashboard from '../Layout/Dash/Dashboard/Dashboard'
import Users from '../Layout/Dash/Dashboard/AllPages/Users'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Sidebard />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/route',
                element: <Dashboard />
            },
            {
                path: '/dashboard/user',
                element: <Users />
            },

        ]
    }
])

export default router