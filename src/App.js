import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import Login from "./Components/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import BookCheckOut from "./Components/BookCheckOut/BookCheckOut";
import Orders from "./Components/Orders/Orders";

export const UserContext = createContext()

function App() {
  const [signedInUser, setSignedInUser] = useState({});

  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
      <Router>
        <div>
          <Navigation />

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>

            <PrivateRoute path="/checkout/:bookId">
              <BookCheckOut></BookCheckOut>
            </PrivateRoute>

            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>

            <Route path="*">
              <h2>404 error Page not found</h2>
            </Route>

          </Switch>
        </div>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
