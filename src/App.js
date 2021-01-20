import React, {useState} from 'react'
import LoginScreen from './LoginScreen'
import Home from './Home'
import ProtectedRoute from './ProtectedRoute'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navigation from './Navigation'
import Landing from './Landing'
import {Slide,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import TimerCollection from './TimerCollection'
import {UserContext} from './UserContext'

function App() {

    let defaultUser = {
        'email':null,
        'api_token':null
    }
    // const [user, setUser] = useState(defaultUser)

    return (
        <Router>
            <UserContext.Provider value={useState(defaultUser)}>
                <Navigation />
                <Switch>
                        <Route path='/auth' component={LoginScreen}/>
                        <ProtectedRoute path='/home'><Home/></ProtectedRoute>
                        <ProtectedRoute path='/collection'><TimerCollection/></ProtectedRoute>
                        <Route path='/' component={Landing}/>
                </Switch>
            </UserContext.Provider>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                transition={Slide}
                pauseOnFocusLoss
                pauseOnHover
                limit={3}
            />
        </Router>
    );
}

export default App;