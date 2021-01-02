import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import {Navbar, Footer} from "./components/Utils";
import GlobalStyle from './globalStyles';

import HomeSection from './pages/HomeSection';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";

import ScrollToTop from './components/Utils/ScrollToTop';

import ForgotPassword from "./pages/auth/ForgotPassword";
import History from "./pages/user/History";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/Wishlist";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoryCreate from "./pages/admin/category/CategoryCreate";


import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./functions/auth";


const App = () => {
    const dispatch = useDispatch();

    // to check firebase auth state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult();
                console.log("user", user);

                currentUser(idTokenResult.token)
                    .then((res) => {
                        dispatch({
                            type: "LOGGED_IN_USER",
                            payload: {
                                name: res.data.name,
                                email: res.data.email,
                                token: idTokenResult.token,
                                role: res.data.role,
                                _id: res.data._id,
                            },
                        });
                    })
                    .catch((err) => console.log(err));
            }
        });
        // cleanup
        return () => unsubscribe();
    }, [dispatch]);
        return (
            <React.Fragment>
                <Router>
                    <GlobalStyle/>
                    <ToastContainer />
                    <ScrollToTop/>
                    <Navbar/>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomeSection}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/register/complete" component={RegisterComplete} />
                        <Route exact path="/forgot/password" component={ForgotPassword} />
                        <UserRoute exact path="/user/history" component={History} />
                        <UserRoute exact path="/user/password" component={Password} />
                        <UserRoute exact path="/user/wishlist" component={Wishlist} />
                        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
                        <AdminRoute exact path="/admin/category" component={CategoryCreate} />
                    </Switch>
                    <Footer/>
                </Router>
            </React.Fragment>
        );
    };



export default App;