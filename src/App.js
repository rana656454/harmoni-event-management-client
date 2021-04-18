import React,{createContext,useState} from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Booking from './components/booking/booking/Booking';
import Home from './components/home/home/Home';
import Login from './components/login/Login'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/dashboard/dashboard/Dashboard';
import Book from './components/dashboard/book/Book';
import Bookinglist from './components/dashboard/bookinglist/Bookinglist';
import Review from './components/dashboard/review/Review';
import Orderlist from './components/dashboard/orderlist/Orderlist';
import Addservice from './components/dashboard/addservice/Addservice';
import Makeadmin from './components/dashboard/makeadmin/Makeadmin';
import Manageservice from './components/dashboard/manageservice/Manageservice';
export const UserContext = createContext()
function App() {
  const [loggedInUser,setloggedInUser] = useState({})
  return (
    <div>
    <UserContext.Provider value={[loggedInUser,setloggedInUser]}>
    <Router>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>

      <PrivateRoute exact path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute>
       
      <PrivateRoute exact path="/dashboard/book/:id">
        <Book></Book>
      </PrivateRoute>

      <Route exact path="/dashboard/book">
        <Book></Book>
      </Route>



      <PrivateRoute exact path="/dashboard/bookinglist">
        <Bookinglist></Bookinglist>
      </PrivateRoute>

      <Route exact path="/dashboard/review">
        <Review></Review>
      </Route>

      <Route exact path="/dashboard/orderlist">
        <Orderlist></Orderlist>
      </Route>


      <Route exact path="/dashboard/addservice">
        <Addservice></Addservice>
      </Route>

      <Route exact path="/dashboard/manageservice">
        <Manageservice></Manageservice>
      </Route>
         
      <Route exact path="/dashboard/makeadmin">
        <Makeadmin></Makeadmin>
      </Route>

      <Route path="/appointment">
      <Booking></Booking>
      </Route>
     
     
      <Route path="/login">
      <Login></Login>
      </Route>

    </Switch>
  </Router>
  </UserContext.Provider>
  </div>
  );
}

export default App;
