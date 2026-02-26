import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import AddListing from '../pages/AddListing/AddListing';
import RoommateDetails from '../Components/RoommateDetails/RoommateDetails';
import BrowseListing from '../Components/BrowseListing/BrowseListing';
import Login from '../pages/Login/Login';
import MyListing from '../Components/MyListing/MyListing';
import RoommateUpdate from '../Components/RoommateUpdate/RoommateUpdate';
import Details from '../Components/Details/Details';
import RequireAuth from '../contexts/RequireAuth/RequireAuth';
import Spinner from '../Components/Spinner/Spinner';


const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/add-listing',
                Component: AddListing,
            },
            {
                path: '/my-listing',
                element: <RequireAuth><MyListing></MyListing></RequireAuth>,
            },
            
            {
                path: '/roommate-details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/roommate/${params.id}`),
                element: <RoommateDetails></RoommateDetails>
                
            },
            {
                path: '/browse-listing',
                element: <BrowseListing></BrowseListing>
            }
        ]
    },
]);

export default router;